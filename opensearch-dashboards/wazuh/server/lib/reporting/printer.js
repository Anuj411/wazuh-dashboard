"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportPrinter = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _printer = _interopRequireDefault(require("pdfmake/src/printer"));

var _clockIconRaw = _interopRequireDefault(require("./clock-icon-raw"));

var _filterIconRaw = _interopRequireDefault(require("./filter-icon-raw"));

var _visualizations = require("../../integration-files/visualizations");

var _logger = require("../logger");

var TimSort = _interopRequireWildcard(require("timsort"));

var _getConfiguration = require("../get-configuration");

var _constants = require("../../../common/constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const COLORS = {
  PRIMARY: _constants.REPORTS_PRIMARY_COLOR
};

const pageConfiguration = nameLogo => ({
  styles: {
    h1: {
      fontSize: 22,
      monslight: true,
      color: COLORS.PRIMARY
    },
    h2: {
      fontSize: 18,
      monslight: true,
      color: COLORS.PRIMARY
    },
    h3: {
      fontSize: 16,
      monslight: true,
      color: COLORS.PRIMARY
    },
    h4: {
      fontSize: 14,
      monslight: true,
      color: COLORS.PRIMARY
    },
    standard: {
      color: '#333'
    },
    whiteColorFilters: {
      color: '#FFF',
      fontSize: 14
    },
    whiteColor: {
      color: '#FFF'
    }
  },
  pageMargins: [40, 80, 40, 80],
  header: {
    margin: [40, 20, 0, 0],
    columns: [{
      image: _path.default.join(__dirname, `../../../public/assets/${nameLogo}`),
      width: 190
    }, {
      text: _constants.REPORTS_PAGE_HEADER_TEXT,
      alignment: 'right',
      margin: [0, 0, 40, 0],
      color: COLORS.PRIMARY
    }]
  },
  content: [],

  footer(currentPage, pageCount) {
    return {
      columns: [{
        text: _constants.REPORTS_PAGE_FOOTER_TEXT,
        color: COLORS.PRIMARY,
        margin: [40, 40, 0, 0]
      }, {
        text: 'Page ' + currentPage.toString() + ' of ' + pageCount,
        alignment: 'right',
        margin: [0, 40, 40, 0],
        color: COLORS.PRIMARY
      }]
    };
  },

  pageBreakBefore(currentNode, followingNodesOnPage) {
    if (currentNode.id && currentNode.id.includes('splitvis')) {
      return followingNodesOnPage.length === 6 || followingNodesOnPage.length === 7;
    }

    if (currentNode.id && currentNode.id.includes('splitsinglevis') || currentNode.id && currentNode.id.includes('singlevis')) {
      return followingNodesOnPage.length === 6;
    }

    return false;
  }

});

const fonts = {
  Roboto: {
    normal: _path.default.join(__dirname, '../../../public/assets/fonts/opensans/OpenSans-Light.ttf'),
    bold: _path.default.join(__dirname, '../../../public/assets/fonts/opensans/OpenSans-Bold.ttf'),
    italics: _path.default.join(__dirname, '../../../public/assets/fonts/opensans/OpenSans-Italic.ttf'),
    bolditalics: _path.default.join(__dirname, '../../../public/assets/fonts/opensans/OpenSans-BoldItalic.ttf'),
    monslight: _path.default.join(__dirname, '../../../public/assets/fonts/opensans/Montserrat-Light.ttf')
  }
};

class ReportPrinter {
  constructor() {
    _defineProperty(this, "_content", void 0);

    _defineProperty(this, "_printer", void 0);

    this._printer = new _printer.default(fonts);
    this._content = [];
  }

  addContent(...content) {
    this._content.push(...content);

    return this;
  }

  addConfigTables(tables) {
    (0, _logger.log)('reporting:renderConfigTables', 'Started to render configuration tables', 'info');
    (0, _logger.log)('reporting:renderConfigTables', `tables: ${tables.length}`, 'debug');

    for (const table of tables) {
      let rowsparsed = table.rows;

      if (Array.isArray(rowsparsed) && rowsparsed.length) {
        const rows = rowsparsed.length > 100 ? rowsparsed.slice(0, 99) : rowsparsed;
        this.addContent({
          text: table.title,
          style: {
            fontSize: 11,
            color: '#000'
          },
          margin: table.title && table.type === 'table' ? [0, 0, 0, 5] : ''
        });

        if (table.title === 'Monitored directories') {
          this.addContent({
            text: 'RT: Real time | WD: Who-data | Per.: Permission | MT: Modification time | SL: Symbolic link | RL: Recursion level',
            style: {
              fontSize: 8,
              color: COLORS.PRIMARY
            },
            margin: [0, 0, 0, 5]
          });
        }

        const full_body = [];
        const modifiedRows = rows.map(row => row.map(cell => ({
          text: cell || '-',
          style: 'standard'
        }))); // for (const row of rows) {
        //   modifiedRows.push(
        //     row.map(cell => ({ text: cell || '-', style: 'standard' }))
        //   );
        // }

        let widths = [];
        widths = Array(table.columns.length - 1).fill('auto');
        widths.push('*');

        if (table.type === 'config') {
          full_body.push(table.columns.map(col => ({
            text: col || '-',
            border: [0, 0, 0, 20],
            fontSize: 0,
            colSpan: 2
          })), ...modifiedRows);
          this.addContent({
            fontSize: 8,
            table: {
              headerRows: 0,
              widths,
              body: full_body,
              dontBreakRows: true
            },
            layout: {
              fillColor: i => i === 0 ? '#fff' : null,
              hLineColor: () => '#D3DAE6',
              hLineWidth: () => 1,
              vLineWidth: () => 0
            }
          });
        } else if (table.type === 'table') {
          full_body.push(table.columns.map(col => ({
            text: col || '-',
            style: 'whiteColor',
            border: [0, 0, 0, 0]
          })), ...modifiedRows);
          this.addContent({
            fontSize: 8,
            table: {
              headerRows: 1,
              widths,
              body: full_body
            },
            layout: {
              fillColor: i => i === 0 ? COLORS.PRIMARY : null,
              hLineColor: () => COLORS.PRIMARY,
              hLineWidth: () => 1,
              vLineWidth: () => 0
            }
          });
        }

        this.addNewLine();
      }

      (0, _logger.log)('reporting:renderConfigTables', `Table rendered`, 'debug');
    }
  }

  addTables(tables) {
    (0, _logger.log)('reporting:renderTables', 'Started to render tables', 'info');
    (0, _logger.log)('reporting:renderTables', `tables: ${tables.length}`, 'debug');

    for (const table of tables) {
      let rowsparsed = [];
      rowsparsed = table.rows;

      if (Array.isArray(rowsparsed) && rowsparsed.length) {
        const rows = rowsparsed.length > 100 ? rowsparsed.slice(0, 99) : rowsparsed;
        this.addContent({
          text: table.title,
          style: 'h3',
          pageBreak: 'before',
          pageOrientation: table.columns.length >= 9 ? 'landscape' : 'portrait'
        });
        this.addNewLine();
        const full_body = [];

        const sortTableRows = (a, b) => parseInt(a[a.length - 1]) < parseInt(b[b.length - 1]) ? 1 : parseInt(a[a.length - 1]) > parseInt(b[b.length - 1]) ? -1 : 0;

        TimSort.sort(rows, sortTableRows);
        const modifiedRows = rows.map(row => row.map(cell => ({
          text: cell || '-',
          style: 'standard'
        }))); // the width of the columns is assigned

        const widths = Array(table.columns.length - 1).fill('auto');
        widths.push('*');
        full_body.push(table.columns.map(col => ({
          text: col || '-',
          style: 'whiteColor',
          border: [0, 0, 0, 0]
        })), ...modifiedRows);
        this.addContent({
          fontSize: 8,
          table: {
            headerRows: 1,
            widths,
            body: full_body
          },
          layout: {
            fillColor: i => i === 0 ? COLORS.PRIMARY : null,
            hLineColor: () => COLORS.PRIMARY,
            hLineWidth: () => 1,
            vLineWidth: () => 0
          }
        });
        this.addNewLine();
        (0, _logger.log)('reporting:renderTables', `Table rendered`, 'debug');
      }
    }
  }

  addTimeRangeAndFilters(from, to, filters, timeZone) {
    (0, _logger.log)('reporting:renderTimeRangeAndFilters', `Started to render the time range and the filters`, 'info');
    (0, _logger.log)('reporting:renderTimeRangeAndFilters', `from: ${from}, to: ${to}, filters: ${filters}, timeZone: ${timeZone}`, 'debug');
    const fromDate = new Date(new Date(from).toLocaleString('en-US', {
      timeZone
    }));
    const toDate = new Date(new Date(to).toLocaleString('en-US', {
      timeZone
    }));
    const str = `${this.formatDate(fromDate)} to ${this.formatDate(toDate)}`;
    this.addContent({
      fontSize: 8,
      table: {
        widths: ['*'],
        body: [[{
          columns: [{
            svg: _clockIconRaw.default,
            width: 10,
            height: 10,
            margin: [40, 5, 0, 0]
          }, {
            text: str || '-',
            margin: [43, 0, 0, 0],
            style: 'whiteColorFilters'
          }]
        }], [{
          columns: [{
            svg: _filterIconRaw.default,
            width: 10,
            height: 10,
            margin: [40, 6, 0, 0]
          }, {
            text: filters || '-',
            margin: [43, 0, 0, 0],
            style: 'whiteColorFilters'
          }]
        }]]
      },
      margin: [-40, 0, -40, 0],
      layout: {
        fillColor: () => COLORS.PRIMARY,
        hLineWidth: () => 0,
        vLineWidth: () => 0
      }
    });
    this.addContent({
      text: '\n'
    });
    (0, _logger.log)('reporting:renderTimeRangeAndFilters', 'Time range and filters rendered', 'debug');
  }

  addVisualizations(visualizations, isAgents, tab) {
    (0, _logger.log)('reporting:renderVisualizations', `${visualizations.length} visualizations for tab ${tab}`, 'info');
    const single_vis = visualizations.filter(item => item.width >= 600);
    const double_vis = visualizations.filter(item => item.width < 600);
    single_vis.forEach(visualization => {
      const title = this.checkTitle(visualization, isAgents, tab);
      this.addContent({
        id: 'singlevis' + title[0]._source.title,
        text: title[0]._source.title,
        style: 'h3'
      });
      this.addContent({
        columns: [{
          image: visualization.element,
          width: 500
        }]
      });
      this.addNewLine();
    });
    let pair = [];

    for (const item of double_vis) {
      pair.push(item);

      if (pair.length === 2) {
        const title_1 = this.checkTitle(pair[0], isAgents, tab);
        const title_2 = this.checkTitle(pair[1], isAgents, tab);
        this.addContent({
          columns: [{
            id: 'splitvis' + title_1[0]._source.title,
            text: title_1[0]._source.title,
            style: 'h3',
            width: 280
          }, {
            id: 'splitvis' + title_2[0]._source.title,
            text: title_2[0]._source.title,
            style: 'h3',
            width: 280
          }]
        });
        this.addContent({
          columns: [{
            image: pair[0].element,
            width: 270
          }, {
            image: pair[1].element,
            width: 270
          }]
        });
        this.addNewLine();
        pair = [];
      }
    }

    if (double_vis.length % 2 !== 0) {
      const item = double_vis[double_vis.length - 1];
      const title = this.checkTitle(item, isAgents, tab);
      this.addContent({
        columns: [{
          id: 'splitsinglevis' + title[0]._source.title,
          text: title[0]._source.title,
          style: 'h3',
          width: 280
        }]
      });
      this.addContent({
        columns: [{
          image: item.element,
          width: 280
        }]
      });
      this.addNewLine();
    }
  }

  formatDate(date) {
    (0, _logger.log)('reporting:formatDate', `Format date ${date}`, 'info');
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const str = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}T${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    (0, _logger.log)('reporting:formatDate', `str: ${str}`, 'debug');
    return str;
  }

  checkTitle(item, isAgents, tab) {
    (0, _logger.log)('reporting:checkTitle', `Item ID ${item.id}, from ${isAgents ? 'agents' : 'overview'} and tab ${tab}`, 'info');
    const title = isAgents ? _visualizations.AgentsVisualizations[tab].filter(v => v._id === item.id) : _visualizations.OverviewVisualizations[tab].filter(v => v._id === item.id);
    return title;
  }

  addSimpleTable({
    columns,
    items,
    title
  }) {
    if (title) {
      this.addContent(typeof title === 'string' ? {
        text: title,
        style: 'h4'
      } : title).addNewLine();
    }

    if (!items || !items.length) {
      this.addContent({
        text: 'No results match your search criteria',
        style: 'standard'
      });
      return this;
    }

    const tableHeader = columns.map(column => {
      return {
        text: column.label,
        style: 'whiteColor',
        border: [0, 0, 0, 0]
      };
    });
    const tableRows = items.map((item, index) => {
      return columns.map(column => {
        const cellValue = item[column.id];
        return {
          text: typeof cellValue !== 'undefined' ? cellValue : '-',
          style: 'standard'
        };
      });
    }); // 385 is the max initial width per column

    let totalLength = columns.length - 1;
    const widthColumn = 385 / totalLength;
    let totalWidth = totalLength * widthColumn;
    const widths = [];

    for (let step = 0; step < columns.length - 1; step++) {
      let columnLength = this.getColumnWidth(columns[step], tableRows, step);

      if (columnLength <= Math.round(totalWidth / totalLength)) {
        widths.push(columnLength);
        totalWidth -= columnLength;
      } else {
        widths.push(Math.round(totalWidth / totalLength));
        totalWidth -= Math.round(totalWidth / totalLength);
      }

      totalLength--;
    }

    widths.push('*');
    this.addContent({
      fontSize: 8,
      table: {
        headerRows: 1,
        widths,
        body: [tableHeader, ...tableRows]
      },
      layout: {
        fillColor: i => i === 0 ? COLORS.PRIMARY : null,
        hLineColor: () => COLORS.PRIMARY,
        hLineWidth: () => 1,
        vLineWidth: () => 0
      }
    }).addNewLine();
    return this;
  }

  addList({
    title,
    list
  }) {
    return this.addContentWithNewLine(typeof title === 'string' ? {
      text: title,
      style: 'h2'
    } : title).addContent({
      ul: list.filter(element => element)
    }).addNewLine();
  }

  addNewLine() {
    return this.addContent({
      text: '\n'
    });
  }

  addContentWithNewLine(title) {
    return this.addContent(title).addNewLine();
  }

  addAgentsFilters(agents) {
    (0, _logger.log)('reporting:addAgentsFilters', `Started to render the authorized agents filters`, 'info');
    (0, _logger.log)('reporting:addAgentsFilters', `agents: ${agents}`, 'debug');
    this.addNewLine();
    this.addContent({
      text: 'NOTE: This report only includes the authorized agents of the user who generated the report',
      style: {
        fontSize: 10,
        color: COLORS.PRIMARY
      },
      margin: [0, 0, 0, 5]
    });
    /*TODO: This will be enabled by a config*/

    /* this.addContent({
      fontSize: 8,
      table: {
        widths: ['*'],
        body: [
          [
            {
              columns: [
                {
                  svg: filterIconRaw,
                  width: 10,
                  height: 10,
                  margin: [40, 6, 0, 0]
                },
                {
                  text: `Agent IDs: ${agents}` || '-',
                  margin: [43, 0, 0, 0],
                  style: { fontSize: 8, color: '#333' }
                }
              ]
            }
          ]
        ]
      },
      margin: [-40, 0, -40, 0],
      layout: {
        fillColor: () => null,
        hLineWidth: () => 0,
        vLineWidth: () => 0
      }
    }); */

    this.addContent({
      text: '\n'
    });
    (0, _logger.log)('reporting:addAgentsFilters', 'Time range and filters rendered', 'debug');
  }

  async print(reportPath) {
    const nameLogo = (await (0, _getConfiguration.getConfiguration)())['customization.logo.reports'] || _constants.REPORTS_LOGO_IMAGE_ASSETS_RELATIVE_PATH;

    const document = this._printer.createPdfKitDocument({ ...pageConfiguration(nameLogo),
      content: this._content
    });

    await document.pipe(_fs.default.createWriteStream(reportPath));
    document.end();
  }
  /**
   * Returns the width of a given column
   * 
   * @param column 
   * @param tableRows 
   * @param step 
   * @returns {number}
   */


  getColumnWidth(column, tableRows, index) {
    const widthCharacter = 5; //min width per character
    //Get the longest row value

    const maxRowLength = tableRows.reduce((maxLength, row) => {
      return row[index].text.length > maxLength ? row[index].text.length : maxLength;
    }, 0); //Get column name length

    const headerLength = column.label.length; //Use the longest to get the column width

    const maxLength = maxRowLength > headerLength ? maxRowLength : headerLength;
    return maxLength * widthCharacter;
  }

}

exports.ReportPrinter = ReportPrinter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50ZXIudHMiXSwibmFtZXMiOlsiQ09MT1JTIiwiUFJJTUFSWSIsIlJFUE9SVFNfUFJJTUFSWV9DT0xPUiIsInBhZ2VDb25maWd1cmF0aW9uIiwibmFtZUxvZ28iLCJzdHlsZXMiLCJoMSIsImZvbnRTaXplIiwibW9uc2xpZ2h0IiwiY29sb3IiLCJoMiIsImgzIiwiaDQiLCJzdGFuZGFyZCIsIndoaXRlQ29sb3JGaWx0ZXJzIiwid2hpdGVDb2xvciIsInBhZ2VNYXJnaW5zIiwiaGVhZGVyIiwibWFyZ2luIiwiY29sdW1ucyIsImltYWdlIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJ3aWR0aCIsInRleHQiLCJSRVBPUlRTX1BBR0VfSEVBREVSX1RFWFQiLCJhbGlnbm1lbnQiLCJjb250ZW50IiwiZm9vdGVyIiwiY3VycmVudFBhZ2UiLCJwYWdlQ291bnQiLCJSRVBPUlRTX1BBR0VfRk9PVEVSX1RFWFQiLCJ0b1N0cmluZyIsInBhZ2VCcmVha0JlZm9yZSIsImN1cnJlbnROb2RlIiwiZm9sbG93aW5nTm9kZXNPblBhZ2UiLCJpZCIsImluY2x1ZGVzIiwibGVuZ3RoIiwiZm9udHMiLCJSb2JvdG8iLCJub3JtYWwiLCJib2xkIiwiaXRhbGljcyIsImJvbGRpdGFsaWNzIiwiUmVwb3J0UHJpbnRlciIsImNvbnN0cnVjdG9yIiwiX3ByaW50ZXIiLCJQZGZQcmludGVyIiwiX2NvbnRlbnQiLCJhZGRDb250ZW50IiwicHVzaCIsImFkZENvbmZpZ1RhYmxlcyIsInRhYmxlcyIsInRhYmxlIiwicm93c3BhcnNlZCIsInJvd3MiLCJBcnJheSIsImlzQXJyYXkiLCJzbGljZSIsInRpdGxlIiwic3R5bGUiLCJ0eXBlIiwiZnVsbF9ib2R5IiwibW9kaWZpZWRSb3dzIiwibWFwIiwicm93IiwiY2VsbCIsIndpZHRocyIsImZpbGwiLCJjb2wiLCJib3JkZXIiLCJjb2xTcGFuIiwiaGVhZGVyUm93cyIsImJvZHkiLCJkb250QnJlYWtSb3dzIiwibGF5b3V0IiwiZmlsbENvbG9yIiwiaSIsImhMaW5lQ29sb3IiLCJoTGluZVdpZHRoIiwidkxpbmVXaWR0aCIsImFkZE5ld0xpbmUiLCJhZGRUYWJsZXMiLCJwYWdlQnJlYWsiLCJwYWdlT3JpZW50YXRpb24iLCJzb3J0VGFibGVSb3dzIiwiYSIsImIiLCJwYXJzZUludCIsIlRpbVNvcnQiLCJzb3J0IiwiYWRkVGltZVJhbmdlQW5kRmlsdGVycyIsImZyb20iLCJ0byIsImZpbHRlcnMiLCJ0aW1lWm9uZSIsImZyb21EYXRlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwidG9EYXRlIiwic3RyIiwiZm9ybWF0RGF0ZSIsInN2ZyIsImNsb2NrSWNvblJhdyIsImhlaWdodCIsImZpbHRlckljb25SYXciLCJhZGRWaXN1YWxpemF0aW9ucyIsInZpc3VhbGl6YXRpb25zIiwiaXNBZ2VudHMiLCJ0YWIiLCJzaW5nbGVfdmlzIiwiZmlsdGVyIiwiaXRlbSIsImRvdWJsZV92aXMiLCJmb3JFYWNoIiwidmlzdWFsaXphdGlvbiIsImNoZWNrVGl0bGUiLCJfc291cmNlIiwiZWxlbWVudCIsInBhaXIiLCJ0aXRsZV8xIiwidGl0bGVfMiIsImRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInNlY29uZHMiLCJnZXRTZWNvbmRzIiwiQWdlbnRzVmlzdWFsaXphdGlvbnMiLCJ2IiwiX2lkIiwiT3ZlcnZpZXdWaXN1YWxpemF0aW9ucyIsImFkZFNpbXBsZVRhYmxlIiwiaXRlbXMiLCJ0YWJsZUhlYWRlciIsImNvbHVtbiIsImxhYmVsIiwidGFibGVSb3dzIiwiaW5kZXgiLCJjZWxsVmFsdWUiLCJ0b3RhbExlbmd0aCIsIndpZHRoQ29sdW1uIiwidG90YWxXaWR0aCIsInN0ZXAiLCJjb2x1bW5MZW5ndGgiLCJnZXRDb2x1bW5XaWR0aCIsIk1hdGgiLCJyb3VuZCIsImFkZExpc3QiLCJsaXN0IiwiYWRkQ29udGVudFdpdGhOZXdMaW5lIiwidWwiLCJhZGRBZ2VudHNGaWx0ZXJzIiwiYWdlbnRzIiwicHJpbnQiLCJyZXBvcnRQYXRoIiwiUkVQT1JUU19MT0dPX0lNQUdFX0FTU0VUU19SRUxBVElWRV9QQVRIIiwiZG9jdW1lbnQiLCJjcmVhdGVQZGZLaXREb2N1bWVudCIsInBpcGUiLCJmcyIsImNyZWF0ZVdyaXRlU3RyZWFtIiwiZW5kIiwid2lkdGhDaGFyYWN0ZXIiLCJtYXhSb3dMZW5ndGgiLCJyZWR1Y2UiLCJtYXhMZW5ndGgiLCJoZWFkZXJMZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxPQUFPLEVBQUVDO0FBREksQ0FBZjs7QUFJQSxNQUFNQyxpQkFBaUIsR0FBSUMsUUFBRCxLQUFlO0FBQ3ZDQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsRUFBRSxFQUFFO0FBQ0ZDLE1BQUFBLFFBQVEsRUFBRSxFQURSO0FBRUZDLE1BQUFBLFNBQVMsRUFBRSxJQUZUO0FBR0ZDLE1BQUFBLEtBQUssRUFBRVQsTUFBTSxDQUFDQztBQUhaLEtBREU7QUFNTlMsSUFBQUEsRUFBRSxFQUFFO0FBQ0ZILE1BQUFBLFFBQVEsRUFBRSxFQURSO0FBRUZDLE1BQUFBLFNBQVMsRUFBRSxJQUZUO0FBR0ZDLE1BQUFBLEtBQUssRUFBRVQsTUFBTSxDQUFDQztBQUhaLEtBTkU7QUFXTlUsSUFBQUEsRUFBRSxFQUFFO0FBQ0ZKLE1BQUFBLFFBQVEsRUFBRSxFQURSO0FBRUZDLE1BQUFBLFNBQVMsRUFBRSxJQUZUO0FBR0ZDLE1BQUFBLEtBQUssRUFBRVQsTUFBTSxDQUFDQztBQUhaLEtBWEU7QUFnQk5XLElBQUFBLEVBQUUsRUFBRTtBQUNGTCxNQUFBQSxRQUFRLEVBQUUsRUFEUjtBQUVGQyxNQUFBQSxTQUFTLEVBQUUsSUFGVDtBQUdGQyxNQUFB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QyxDQUFqQjs7QUFDQSxVQUFNb0gsUUFBUSxDQUFDRSxJQUFULENBQ0pDLFlBQUdDLGlCQUFILENBQXFCTixVQUFyQixDQURJLENBQU47QUFHQUUsSUFBQUEsUUFBUSxDQUFDSyxHQUFUO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQVFBakIsRUFBQUEsY0FBYyxDQUFDVixNQUFELEVBQVNFLFNBQVQsRUFBb0JDLEtBQXBCLEVBQTBCO0FBQ3RDLFVBQU15QixjQUFjLEdBQUcsQ0FBdkIsQ0FEc0MsQ0FDWjtBQUUxQjs7QUFDQSxVQUFNQyxZQUFZLEdBQUczQixTQUFTLENBQUM0QixNQUFWLENBQWlCLENBQUNDLFNBQUQsRUFBWTVHLEdBQVosS0FBa0I7QUFDdEQsYUFBUUEsR0FBRyxDQUFDZ0YsS0FBRCxDQUFILENBQVcxSCxJQUFYLENBQWdCYyxNQUFoQixHQUF5QndJLFNBQXpCLEdBQXFDNUcsR0FBRyxDQUFDZ0YsS0FBRCxDQUFILENBQVcxSCxJQUFYLENBQWdCYyxNQUFyRCxHQUE4RHdJLFNBQXRFO0FBQ0QsS0FGb0IsRUFFbkIsQ0FGbUIsQ0FBckIsQ0FKc0MsQ0FRdEM7O0FBQ0EsVUFBTUMsWUFBWSxHQUFHaEMsTUFBTSxDQUFDQyxLQUFQLENBQWExRyxNQUFsQyxDQVRzQyxDQVd0Qzs7QUFDQSxVQUFNd0ksU0FBUyxHQUFHRixZQUFZLEdBQUdHLFlBQWYsR0FBOEJILFlBQTlCLEdBQTZDRyxZQUEvRDtBQUVBLFdBQU9ELFNBQVMsR0FBR0gsY0FBbkI7QUFDRDs7QUF6Z0J1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBQZGZQcmludGVyIGZyb20gJ3BkZm1ha2Uvc3JjL3ByaW50ZXInO1xuaW1wb3J0IGNsb2NrSWNvblJhdyBmcm9tICcuL2Nsb2NrLWljb24tcmF3JztcbmltcG9ydCBmaWx0ZXJJY29uUmF3IGZyb20gJy4vZmlsdGVyLWljb24tcmF3JztcbmltcG9ydCB7XG4gIEFnZW50c1Zpc3VhbGl6YXRpb25zLFxuICBPdmVydmlld1Zpc3VhbGl6YXRpb25zXG59IGZyb20gJy4uLy4uL2ludGVncmF0aW9uLWZpbGVzL3Zpc3VhbGl6YXRpb25zJztcbmltcG9ydCB7IGxvZyB9IGZyb20gJy4uL2xvZ2dlcic7XG5pbXBvcnQgKiBhcyBUaW1Tb3J0IGZyb20gJ3RpbXNvcnQnO1xuaW1wb3J0IHsgZ2V0Q29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2dldC1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IFJFUE9SVFNfUFJJTUFSWV9DT0xPUiwgUkVQT1JUU19MT0dPX0lNQUdFX0FTU0VUU19SRUxBVElWRV9QQVRILCBSRVBPUlRTX1BBR0VfRk9PVEVSX1RFWFQsIFJFUE9SVFNfUEFHRV9IRUFERVJfVEVYVCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMnO1xuXG5jb25zdCBDT0xPUlMgPSB7XG4gIFBSSU1BUlk6IFJFUE9SVFNfUFJJTUFSWV9DT0xPUlxufTtcblxuY29uc3QgcGFnZUNvbmZpZ3VyYXRpb24gPSAobmFtZUxvZ28pID0+ICh7XG4gIHN0eWxlczoge1xuICAgIGgxOiB7XG4gICAgICBmb250U2l6ZTogMjIsXG4gICAgICBtb25zbGlnaHQ6IHRydWUsXG4gICAgICBjb2xvcjogQ09MT1JTLlBSSU1BUllcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICBmb250U2l6ZTogMTgsXG4gICAgICBtb25zbGlnaHQ6IHRydWUsXG4gICAgICBjb2xvcjogQ09MT1JTLlBSSU1BUllcbiAgICB9LFxuICAgIGgzOiB7XG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBtb25zbGlnaHQ6IHRydWUsXG4gICAgICBjb2xvcjogQ09MT1JTLlBSSU1BUllcbiAgICB9LFxuICAgIGg0OiB7XG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBtb25zbGlnaHQ6IHRydWUsXG4gICAgICBjb2xvcjogQ09MT1JTLlBSSU1BUllcbiAgICB9LFxuICAgIHN0YW5kYXJkOiB7XG4gICAgICBjb2xvcjogJyMzMzMnXG4gICAgfSxcbiAgICB3aGl0ZUNvbG9yRmlsdGVyczoge1xuICAgICAgY29sb3I6ICcjRkZGJyxcbiAgICAgIGZvbnRTaXplOiAxNFxuICAgIH0sXG4gICAgd2hpdGVDb2xvcjoge1xuICAgICAgY29sb3I6ICcjRkZGJ1xuICAgIH1cbiAgfSxcbiAgcGFnZU1hcmdpbnM6IFs0MCwgODAsIDQwLCA4MF0sXG4gIGhlYWRlcjoge1xuICAgIG1hcmdpbjogWzQwLCAyMCwgMCwgMF0sXG4gICAgY29sdW1uczogW1xuICAgICAge1xuICAgICAgICBpbWFnZTogcGF0aC5qb2luKF9fZGlybmFtZSwgYC4uLy4uLy4uL3B1YmxpYy9hc3NldHMvJHtuYW1lTG9nb31gKSxcbiAgICAgICAgd2lkdGg6IDE5MFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogUkVQT1JUU19QQUdFX0hFQURFUl9URVhULFxuICAgICAgICBhbGlnbm1lbnQ6ICdyaWdodCcsXG4gICAgICAgIG1hcmdpbjogWzAsIDAsIDQwLCAwXSxcbiAgICAgICAgY29sb3I6IENPTE9SUy5QUklNQVJZXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBjb250ZW50OiBbXSxcbiAgZm9vdGVyKGN1cnJlbnRQYWdlLCBwYWdlQ291bnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sdW1uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogUkVQT1JUU19QQUdFX0ZPT1RFUl9URVhULFxuICAgICAgICAgIGNvbG9yOiBDT0xPUlMuUFJJTUFSWSxcbiAgICAgICAgICBtYXJnaW46IFs0MCwgNDAsIDAsIDBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnUGFnZSAnICsgY3VycmVudFBhZ2UudG9TdHJpbmcoKSArICcgb2YgJyArIHBhZ2VDb3VudCxcbiAgICAgICAgICBhbGlnbm1lbnQ6ICdyaWdodCcsXG4gICAgICAgICAgbWFyZ2luOiBbMCwgNDAsIDQwLCAwXSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTLlBSSU1BUllcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH0sXG4gIHBhZ2VCcmVha0JlZm9yZShjdXJyZW50Tm9kZSwgZm9sbG93aW5nTm9kZXNPblBhZ2UpIHtcbiAgICBpZiAoY3VycmVudE5vZGUuaWQgJiYgY3VycmVudE5vZGUuaWQuaW5jbHVkZXMoJ3NwbGl0dmlzJykpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGZvbGxvd2luZ05vZGVzT25QYWdlLmxlbmd0aCA9PT0gNiB8fFxuICAgICAgICBmb2xsb3dpbmdOb2Rlc09uUGFnZS5sZW5ndGggPT09IDdcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIChjdXJyZW50Tm9kZS5pZCAmJiBjdXJyZW50Tm9kZS5pZC5pbmNsdWRlcygnc3BsaXRzaW5nbGV2aXMnKSkgfHxcbiAgICAgIChjdXJyZW50Tm9kZS5pZCAmJiBjdXJyZW50Tm9kZS5pZC5pbmNsdWRlcygnc2luZ2xldmlzJykpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZm9sbG93aW5nTm9kZXNPblBhZ2UubGVuZ3RoID09PSA2O1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0pO1xuXG5jb25zdCBmb250cyA9IHtcbiAgUm9ib3RvOiB7XG4gICAgbm9ybWFsOiBwYXRoLmpvaW4oXG4gICAgICBfX2Rpcm5hbWUsXG4gICAgICAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9mb250cy9vcGVuc2Fucy9PcGVuU2Fucy1MaWdodC50dGYnXG4gICAgKSxcbiAgICBib2xkOiBwYXRoLmpvaW4oXG4gICAgICBfX2Rpcm5hbWUsXG4gICAgICAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9mb250cy9vcGVuc2Fucy9PcGVuU2Fucy1Cb2xkLnR0ZidcbiAgICApLFxuICAgIGl0YWxpY3M6IHBhdGguam9pbihcbiAgICAgIF9fZGlybmFtZSxcbiAgICAgICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ZvbnRzL29wZW5zYW5zL09wZW5TYW5zLUl0YWxpYy50dGYnXG4gICAgKSxcbiAgICBib2xkaXRhbGljczogcGF0aC5qb2luKFxuICAgICAgX19kaXJuYW1lLFxuICAgICAgJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvZm9udHMvb3BlbnNhbnMvT3BlblNhbnMtQm9sZEl0YWxpYy50dGYnXG4gICAgKSxcbiAgICBtb25zbGlnaHQ6IHBhdGguam9pbihcbiAgICAgIF9fZGlybmFtZSxcbiAgICAgICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ZvbnRzL29wZW5zYW5zL01vbnRzZXJyYXQtTGlnaHQudHRmJ1xuICAgIClcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIFJlcG9ydFByaW50ZXJ7XG4gIHByaXZhdGUgX2NvbnRlbnQ6IGFueVtdO1xuICBwcml2YXRlIF9wcmludGVyOiBQZGZQcmludGVyO1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuX3ByaW50ZXIgPSBuZXcgUGRmUHJpbnRlcihmb250cyk7XG4gICAgdGhpcy5fY29udGVudCA9IFtdO1xuICB9XG4gIGFkZENvbnRlbnQoLi4uY29udGVudDogYW55KXtcbiAgICB0aGlzLl9jb250ZW50LnB1c2goLi4uY29udGVudCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYWRkQ29uZmlnVGFibGVzKHRhYmxlczogYW55KXtcbiAgICBsb2coXG4gICAgICAncmVwb3J0aW5nOnJlbmRlckNvbmZpZ1RhYmxlcycsXG4gICAgICAnU3RhcnRlZCB0byByZW5kZXIgY29uZmlndXJhdGlvbiB0YWJsZXMnLFxuICAgICAgJ2luZm8nXG4gICAgKTtcbiAgICBsb2coJ3JlcG9ydGluZzpyZW5kZXJDb25maWdUYWJsZXMnLCBgdGFibGVzOiAke3RhYmxlcy5sZW5ndGh9YCwgJ2RlYnVnJyk7XG4gICAgZm9yIChjb25zdCB0YWJsZSBvZiB0YWJsZXMpIHtcbiAgICAgIGxldCByb3dzcGFyc2VkID0gdGFibGUucm93cztcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd3NwYXJzZWQpICYmIHJvd3NwYXJzZWQubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHJvd3MgPVxuICAgICAgICAgIHJvd3NwYXJzZWQubGVuZ3RoID4gMTAwID8gcm93c3BhcnNlZC5zbGljZSgwLCA5OSkgOiByb3dzcGFyc2VkO1xuICAgICAgICB0aGlzLmFkZENvbnRlbnQoe1xuICAgICAgICAgIHRleHQ6IHRhYmxlLnRpdGxlLFxuICAgICAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiAxMSwgY29sb3I6ICcjMDAwJyB9LFxuICAgICAgICAgIG1hcmdpbjogdGFibGUudGl0bGUgJiYgdGFibGUudHlwZSA9PT0gJ3RhYmxlJyA/IFswLCAwLCAwLCA1XSA6ICcnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0YWJsZS50aXRsZSA9PT0gJ01vbml0b3JlZCBkaXJlY3RvcmllcycpIHtcbiAgICAgICAgICB0aGlzLmFkZENvbnRlbnQoe1xuICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgJ1JUOiBSZWFsIHRpbWUgfCBXRDogV2hvLWRhdGEgfCBQZXIuOiBQZXJtaXNzaW9uIHwgTVQ6IE1vZGlmaWNhdGlvbiB0aW1lIHwgU0w6IFN5bWJvbGljIGxpbmsgfCBSTDogUmVjdXJzaW9uIGxldmVsJyxcbiAgICAgICAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiA4LCBjb2xvcjogQ09MT1JTLlBSSU1BUlkgfSxcbiAgICAgICAgICAgIG1hcmdpbjogWzAsIDAsIDAsIDVdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmdWxsX2JvZHkgPSBbXTtcblxuICAgICAgICBjb25zdCBtb2RpZmllZFJvd3MgPSByb3dzLm1hcChyb3cgPT4gcm93Lm1hcChjZWxsID0+ICh7IHRleHQ6IGNlbGwgfHwgJy0nLCBzdHlsZTogJ3N0YW5kYXJkJyB9KSkpO1xuICAgICAgICAvLyBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICAgIC8vICAgbW9kaWZpZWRSb3dzLnB1c2goXG4gICAgICAgIC8vICAgICByb3cubWFwKGNlbGwgPT4gKHsgdGV4dDogY2VsbCB8fCAnLScsIHN0eWxlOiAnc3RhbmRhcmQnIH0pKVxuICAgICAgICAvLyAgICk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IHdpZHRocyA9IFtdO1xuICAgICAgICB3aWR0aHMgPSBBcnJheSh0YWJsZS5jb2x1bW5zLmxlbmd0aCAtIDEpLmZpbGwoJ2F1dG8nKTtcbiAgICAgICAgd2lkdGhzLnB1c2goJyonKTtcblxuICAgICAgICBpZiAodGFibGUudHlwZSA9PT0gJ2NvbmZpZycpIHtcbiAgICAgICAgICBmdWxsX2JvZHkucHVzaChcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMubWFwKGNvbCA9PiAoe1xuICAgICAgICAgICAgICB0ZXh0OiBjb2wgfHwgJy0nLFxuICAgICAgICAgICAgICBib3JkZXI6IFswLCAwLCAwLCAyMF0sXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAwLFxuICAgICAgICAgICAgICBjb2xTcGFuOiAyXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAuLi5tb2RpZmllZFJvd3NcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuYWRkQ29udGVudCh7XG4gICAgICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgICAgIHRhYmxlOiB7XG4gICAgICAgICAgICAgIGhlYWRlclJvd3M6IDAsXG4gICAgICAgICAgICAgIHdpZHRocyxcbiAgICAgICAgICAgICAgYm9keTogZnVsbF9ib2R5LFxuICAgICAgICAgICAgICBkb250QnJlYWtSb3dzOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgIGZpbGxDb2xvcjogaSA9PiAoaSA9PT0gMCA/ICcjZmZmJyA6IG51bGwpLFxuICAgICAgICAgICAgICBoTGluZUNvbG9yOiAoKSA9PiAnI0QzREFFNicsXG4gICAgICAgICAgICAgIGhMaW5lV2lkdGg6ICgpID0+IDEsXG4gICAgICAgICAgICAgIHZMaW5lV2lkdGg6ICgpID0+IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWJsZS50eXBlID09PSAndGFibGUnKSB7XG4gICAgICAgICAgZnVsbF9ib2R5LnB1c2goXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zLm1hcChjb2wgPT4gKHtcbiAgICAgICAgICAgICAgdGV4dDogY29sIHx8ICctJyxcbiAgICAgICAgICAgICAgc3R5bGU6ICd3aGl0ZUNvbG9yJyxcbiAgICAgICAgICAgICAgYm9yZGVyOiBbMCwgMCwgMCwgMF1cbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIC4uLm1vZGlmaWVkUm93c1xuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5hZGRDb250ZW50KHtcbiAgICAgICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICAgICAgaGVhZGVyUm93czogMSxcbiAgICAgICAgICAgICAgd2lkdGhzLFxuICAgICAgICAgICAgICBib2R5OiBmdWxsX2JvZHlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgZmlsbENvbG9yOiBpID0+IChpID09PSAwID8gQ09MT1JTLlBSSU1BUlkgOiBudWxsKSxcbiAgICAgICAgICAgICAgaExpbmVDb2xvcjogKCkgPT4gQ09MT1JTLlBSSU1BUlksXG4gICAgICAgICAgICAgIGhMaW5lV2lkdGg6ICgpID0+IDEsXG4gICAgICAgICAgICAgIHZMaW5lV2lkdGg6ICgpID0+IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZE5ld0xpbmUoKTtcbiAgICAgIH1cbiAgICAgIGxvZygncmVwb3J0aW5nOnJlbmRlckNvbmZpZ1RhYmxlcycsIGBUYWJsZSByZW5kZXJlZGAsICdkZWJ1ZycpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRhYmxlcyh0YWJsZXM6IGFueSl7XG4gICAgbG9nKCdyZXBvcnRpbmc6cmVuZGVyVGFibGVzJywgJ1N0YXJ0ZWQgdG8gcmVuZGVyIHRhYmxlcycsICdpbmZvJyk7XG4gICAgbG9nKCdyZXBvcnRpbmc6cmVuZGVyVGFibGVzJywgYHRhYmxlczogJHt0YWJsZXMubGVuZ3RofWAsICdkZWJ1ZycpO1xuICAgIGZvciAoY29uc3QgdGFibGUgb2YgdGFibGVzKSB7XG4gICAgICBsZXQgcm93c3BhcnNlZCA9IFtdO1xuICAgICAgcm93c3BhcnNlZCA9IHRhYmxlLnJvd3M7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dzcGFyc2VkKSAmJiByb3dzcGFyc2VkLmxlbmd0aCkge1xuICAgICAgICBjb25zdCByb3dzID1cbiAgICAgICAgICByb3dzcGFyc2VkLmxlbmd0aCA+IDEwMCA/IHJvd3NwYXJzZWQuc2xpY2UoMCwgOTkpIDogcm93c3BhcnNlZDtcbiAgICAgICAgdGhpcy5hZGRDb250ZW50KHtcbiAgICAgICAgICB0ZXh0OiB0YWJsZS50aXRsZSxcbiAgICAgICAgICBzdHlsZTogJ2gzJyxcbiAgICAgICAgICBwYWdlQnJlYWs6ICdiZWZvcmUnLFxuICAgICAgICAgIHBhZ2VPcmllbnRhdGlvbjogdGFibGUuY29sdW1ucy5sZW5ndGggPj0gOSA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkTmV3TGluZSgpO1xuICAgICAgICBjb25zdCBmdWxsX2JvZHkgPSBbXTtcbiAgICAgICAgY29uc3Qgc29ydFRhYmxlUm93cyA9IChhLCBiKSA9PlxuICAgICAgICAgIHBhcnNlSW50KGFbYS5sZW5ndGggLSAxXSkgPCBwYXJzZUludChiW2IubGVuZ3RoIC0gMV0pXG4gICAgICAgICAgICA/IDFcbiAgICAgICAgICAgIDogcGFyc2VJbnQoYVthLmxlbmd0aCAtIDFdKSA+IHBhcnNlSW50KGJbYi5sZW5ndGggLSAxXSlcbiAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgIDogMDtcblxuICAgICAgICBUaW1Tb3J0LnNvcnQocm93cywgc29ydFRhYmxlUm93cyk7XG5cbiAgICAgICAgY29uc3QgbW9kaWZpZWRSb3dzID0gcm93cy5tYXAocm93ID0+IHJvdy5tYXAoY2VsbCA9PiAoeyB0ZXh0OiBjZWxsIHx8ICctJywgc3R5bGU6ICdzdGFuZGFyZCcgfSkpKTtcblxuICAgICAgICAvLyB0aGUgd2lkdGggb2YgdGhlIGNvbHVtbnMgaXMgYXNzaWduZWRcbiAgICAgICAgY29uc3Qgd2lkdGhzID0gQXJyYXkodGFibGUuY29sdW1ucy5sZW5ndGggLSAxKS5maWxsKCdhdXRvJyk7XG4gICAgICAgIHdpZHRocy5wdXNoKCcqJyk7XG5cbiAgICAgICAgZnVsbF9ib2R5LnB1c2goXG4gICAgICAgICAgdGFibGUuY29sdW1ucy5tYXAoY29sID0+ICh7XG4gICAgICAgICAgICB0ZXh0OiBjb2wgfHwgJy0nLFxuICAgICAgICAgICAgc3R5bGU6ICd3aGl0ZUNvbG9yJyxcbiAgICAgICAgICAgIGJvcmRlcjogWzAsIDAsIDAsIDBdXG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIC4uLm1vZGlmaWVkUm93c1xuICAgICAgICApO1xuICAgICAgICB0aGlzLmFkZENvbnRlbnQoe1xuICAgICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICAgIHRhYmxlOiB7XG4gICAgICAgICAgICBoZWFkZXJSb3dzOiAxLFxuICAgICAgICAgICAgd2lkdGhzLFxuICAgICAgICAgICAgYm9keTogZnVsbF9ib2R5XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgIGZpbGxDb2xvcjogaSA9PiAoaSA9PT0gMCA/IENPTE9SUy5QUklNQVJZIDogbnVsbCksXG4gICAgICAgICAgICBoTGluZUNvbG9yOiAoKSA9PiBDT0xPUlMuUFJJTUFSWSxcbiAgICAgICAgICAgIGhMaW5lV2lkdGg6ICgpID0+IDEsXG4gICAgICAgICAgICB2TGluZVdpZHRoOiAoKSA9PiAwXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGROZXdMaW5lKCk7XG4gICAgICAgIGxvZygncmVwb3J0aW5nOnJlbmRlclRhYmxlcycsIGBUYWJsZSByZW5kZXJlZGAsICdkZWJ1ZycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhZGRUaW1lUmFuZ2VBbmRGaWx0ZXJzKGZyb20sIHRvLCBmaWx0ZXJzLCB0aW1lWm9uZSl7XG4gICAgbG9nKFxuICAgICAgJ3JlcG9ydGluZzpyZW5kZXJUaW1lUmFuZ2VBbmRGaWx0ZXJzJyxcbiAgICAgIGBTdGFydGVkIHRvIHJlbmRlciB0aGUgdGltZSByYW5nZSBhbmQgdGhlIGZpbHRlcnNgLFxuICAgICAgJ2luZm8nXG4gICAgKTtcbiAgICBsb2coXG4gICAgICAncmVwb3J0aW5nOnJlbmRlclRpbWVSYW5nZUFuZEZpbHRlcnMnLFxuICAgICAgYGZyb206ICR7ZnJvbX0sIHRvOiAke3RvfSwgZmlsdGVyczogJHtmaWx0ZXJzfSwgdGltZVpvbmU6ICR7dGltZVpvbmV9YCxcbiAgICAgICdkZWJ1ZydcbiAgICApO1xuICAgIGNvbnN0IGZyb21EYXRlID0gbmV3IERhdGUoXG4gICAgICBuZXcgRGF0ZShmcm9tKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IHRpbWVab25lIH0pXG4gICAgKTtcbiAgICBjb25zdCB0b0RhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSh0bykudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyB0aW1lWm9uZSB9KSk7XG4gICAgY29uc3Qgc3RyID0gYCR7dGhpcy5mb3JtYXREYXRlKGZyb21EYXRlKX0gdG8gJHt0aGlzLmZvcm1hdERhdGUodG9EYXRlKX1gO1xuXG4gICAgdGhpcy5hZGRDb250ZW50KHtcbiAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgdGFibGU6IHtcbiAgICAgICAgd2lkdGhzOiBbJyonXSxcbiAgICAgICAgYm9keTogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN2ZzogY2xvY2tJY29uUmF3LFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogWzQwLCA1LCAwLCAwXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogc3RyIHx8ICctJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogWzQzLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiAnd2hpdGVDb2xvckZpbHRlcnMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdmc6IGZpbHRlckljb25SYXcsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBbNDAsIDYsIDAsIDBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBmaWx0ZXJzIHx8ICctJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogWzQzLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiAnd2hpdGVDb2xvckZpbHRlcnMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgbWFyZ2luOiBbLTQwLCAwLCAtNDAsIDBdLFxuICAgICAgbGF5b3V0OiB7XG4gICAgICAgIGZpbGxDb2xvcjogKCkgPT4gQ09MT1JTLlBSSU1BUlksXG4gICAgICAgIGhMaW5lV2lkdGg6ICgpID0+IDAsXG4gICAgICAgIHZMaW5lV2lkdGg6ICgpID0+IDBcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29udGVudCh7IHRleHQ6ICdcXG4nIH0pO1xuICAgIGxvZyhcbiAgICAgICdyZXBvcnRpbmc6cmVuZGVyVGltZVJhbmdlQW5kRmlsdGVycycsXG4gICAgICAnVGltZSByYW5nZSBhbmQgZmlsdGVycyByZW5kZXJlZCcsXG4gICAgICAnZGVidWcnXG4gICAgKTtcbiAgfVxuICBhZGRWaXN1YWxpemF0aW9ucyh2aXN1YWxpemF0aW9ucywgaXNBZ2VudHMsIHRhYil7XG4gICAgbG9nKFxuICAgICAgJ3JlcG9ydGluZzpyZW5kZXJWaXN1YWxpemF0aW9ucycsXG4gICAgICBgJHt2aXN1YWxpemF0aW9ucy5sZW5ndGh9IHZpc3VhbGl6YXRpb25zIGZvciB0YWIgJHt0YWJ9YCxcbiAgICAgICdpbmZvJ1xuICAgICk7XG4gICAgY29uc3Qgc2luZ2xlX3ZpcyA9IHZpc3VhbGl6YXRpb25zLmZpbHRlcihpdGVtID0+IGl0ZW0ud2lkdGggPj0gNjAwKTtcbiAgICBjb25zdCBkb3VibGVfdmlzID0gdmlzdWFsaXphdGlvbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS53aWR0aCA8IDYwMCk7XG5cbiAgICBzaW5nbGVfdmlzLmZvckVhY2godmlzdWFsaXphdGlvbiA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMuY2hlY2tUaXRsZSh2aXN1YWxpemF0aW9uLCBpc0FnZW50cywgdGFiKTtcbiAgICAgIHRoaXMuYWRkQ29udGVudCh7XG4gICAgICAgIGlkOiAnc2luZ2xldmlzJyArIHRpdGxlWzBdLl9zb3VyY2UudGl0bGUsXG4gICAgICAgIHRleHQ6IHRpdGxlWzBdLl9zb3VyY2UudGl0bGUsXG4gICAgICAgIHN0eWxlOiAnaDMnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWRkQ29udGVudCh7IGNvbHVtbnM6IFt7IGltYWdlOiB2aXN1YWxpemF0aW9uLmVsZW1lbnQsIHdpZHRoOiA1MDAgfV0gfSk7XG4gICAgICB0aGlzLmFkZE5ld0xpbmUoKTtcbiAgICB9KVxuXG4gICAgbGV0IHBhaXIgPSBbXTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkb3VibGVfdmlzKSB7XG4gICAgICBwYWlyLnB1c2goaXRlbSk7XG4gICAgICBpZiAocGFpci5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29uc3QgdGl0bGVfMSA9IHRoaXMuY2hlY2tUaXRsZShwYWlyWzBdLCBpc0FnZW50cywgdGFiKTtcbiAgICAgICAgY29uc3QgdGl0bGVfMiA9IHRoaXMuY2hlY2tUaXRsZShwYWlyWzFdLCBpc0FnZW50cywgdGFiKTtcblxuICAgICAgICB0aGlzLmFkZENvbnRlbnQoe1xuICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdzcGxpdHZpcycgKyB0aXRsZV8xWzBdLl9zb3VyY2UudGl0bGUsXG4gICAgICAgICAgICAgIHRleHQ6IHRpdGxlXzFbMF0uX3NvdXJjZS50aXRsZSxcbiAgICAgICAgICAgICAgc3R5bGU6ICdoMycsXG4gICAgICAgICAgICAgIHdpZHRoOiAyODBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnc3BsaXR2aXMnICsgdGl0bGVfMlswXS5fc291cmNlLnRpdGxlLFxuICAgICAgICAgICAgICB0ZXh0OiB0aXRsZV8yWzBdLl9zb3VyY2UudGl0bGUsXG4gICAgICAgICAgICAgIHN0eWxlOiAnaDMnLFxuICAgICAgICAgICAgICB3aWR0aDogMjgwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENvbnRlbnQoe1xuICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgIHsgaW1hZ2U6IHBhaXJbMF0uZWxlbWVudCwgd2lkdGg6IDI3MCB9LFxuICAgICAgICAgICAgeyBpbWFnZTogcGFpclsxXS5lbGVtZW50LCB3aWR0aDogMjcwIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkTmV3TGluZSgpO1xuICAgICAgICBwYWlyID0gW107XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRvdWJsZV92aXMubGVuZ3RoICUgMiAhPT0gMCkge1xuICAgICAgY29uc3QgaXRlbSA9IGRvdWJsZV92aXNbZG91YmxlX3Zpcy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5jaGVja1RpdGxlKGl0ZW0sIGlzQWdlbnRzLCB0YWIpO1xuICAgICAgdGhpcy5hZGRDb250ZW50KHtcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnc3BsaXRzaW5nbGV2aXMnICsgdGl0bGVbMF0uX3NvdXJjZS50aXRsZSxcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlWzBdLl9zb3VyY2UudGl0bGUsXG4gICAgICAgICAgICBzdHlsZTogJ2gzJyxcbiAgICAgICAgICAgIHdpZHRoOiAyODBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5hZGRDb250ZW50KHsgY29sdW1uczogW3sgaW1hZ2U6IGl0ZW0uZWxlbWVudCwgd2lkdGg6IDI4MCB9XSB9KTtcbiAgICAgIHRoaXMuYWRkTmV3TGluZSgpO1xuICAgIH1cbiAgfVxuICBmb3JtYXREYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGxvZygncmVwb3J0aW5nOmZvcm1hdERhdGUnLCBgRm9ybWF0IGRhdGUgJHtkYXRlfWAsICdpbmZvJyk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIGNvbnN0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICBjb25zdCBzdHIgPSBgJHt5ZWFyfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke1xuICAgICAgZGF5IDwgMTAgPyAnMCcgKyBkYXkgOiBkYXlcbiAgICB9VCR7aG91cnMgPCAxMCA/ICcwJyArIGhvdXJzIDogaG91cnN9OiR7XG4gICAgICBtaW51dGVzIDwgMTAgPyAnMCcgKyBtaW51dGVzIDogbWludXRlc1xuICAgIH06JHtzZWNvbmRzIDwgMTAgPyAnMCcgKyBzZWNvbmRzIDogc2Vjb25kc31gO1xuICAgIGxvZygncmVwb3J0aW5nOmZvcm1hdERhdGUnLCBgc3RyOiAke3N0cn1gLCAnZGVidWcnKTtcbiAgICByZXR1cm4gc3RyO1xuICB9XG4gIGNoZWNrVGl0bGUoaXRlbSwgaXNBZ2VudHMsIHRhYikge1xuICAgIGxvZyhcbiAgICAgICdyZXBvcnRpbmc6Y2hlY2tUaXRsZScsXG4gICAgICBgSXRlbSBJRCAke2l0ZW0uaWR9LCBmcm9tICR7XG4gICAgICAgIGlzQWdlbnRzID8gJ2FnZW50cycgOiAnb3ZlcnZpZXcnXG4gICAgICB9IGFuZCB0YWIgJHt0YWJ9YCxcbiAgICAgICdpbmZvJ1xuICAgICk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGlzQWdlbnRzXG4gICAgICA/IEFnZW50c1Zpc3VhbGl6YXRpb25zW3RhYl0uZmlsdGVyKHYgPT4gdi5faWQgPT09IGl0ZW0uaWQpXG4gICAgICA6IE92ZXJ2aWV3VmlzdWFsaXphdGlvbnNbdGFiXS5maWx0ZXIodiA9PiB2Ll9pZCA9PT0gaXRlbS5pZCk7XG4gICAgcmV0dXJuIHRpdGxlO1xuICB9XG5cbiAgYWRkU2ltcGxlVGFibGUoe2NvbHVtbnMsIGl0ZW1zLCB0aXRsZX06IHtjb2x1bW5zOiAoe2lkOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmd9KVtdLCB0aXRsZT86IChzdHJpbmcgfCB7dGV4dDogc3RyaW5nLCBzdHlsZTogc3RyaW5nfSksIGl0ZW1zOiBhbnlbXX0pe1xuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICB0aGlzLmFkZENvbnRlbnQodHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyA/IHsgdGV4dDogdGl0bGUsIHN0eWxlOiAnaDQnIH0gOiB0aXRsZSlcbiAgICAgICAgLmFkZE5ld0xpbmUoKTtcbiAgICB9XG4gIFxuICAgIGlmICghaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgdGhpcy5hZGRDb250ZW50KHtcbiAgICAgICAgdGV4dDogJ05vIHJlc3VsdHMgbWF0Y2ggeW91ciBzZWFyY2ggY3JpdGVyaWEnLFxuICAgICAgICBzdHlsZTogJ3N0YW5kYXJkJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb25zdCB0YWJsZUhlYWRlciA9IGNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XG4gICAgICByZXR1cm4geyB0ZXh0OiBjb2x1bW4ubGFiZWwsIHN0eWxlOiAnd2hpdGVDb2xvcicsIGJvcmRlcjogWzAsIDAsIDAsIDBdIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCB0YWJsZVJvd3MgPSBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gY29sdW1ucy5tYXAoY29sdW1uID0+IHtcbiAgICAgICAgY29uc3QgY2VsbFZhbHVlID0gaXRlbVtjb2x1bW4uaWRdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRleHQ6IHR5cGVvZiBjZWxsVmFsdWUgIT09ICd1bmRlZmluZWQnID8gY2VsbFZhbHVlIDogJy0nLFxuICAgICAgICAgIHN0eWxlOiAnc3RhbmRhcmQnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7IFxuXG4gICAgLy8gMzg1IGlzIHRoZSBtYXggaW5pdGlhbCB3aWR0aCBwZXIgY29sdW1uXG4gICAgbGV0IHRvdGFsTGVuZ3RoID0gY29sdW1ucy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHdpZHRoQ29sdW1uID0gMzg1L3RvdGFsTGVuZ3RoO1xuICAgIGxldCB0b3RhbFdpZHRoID0gdG90YWxMZW5ndGggKiB3aWR0aENvbHVtbjtcbiAgICBcbiAgICBjb25zdCB3aWR0aHM6KG51bWJlcilbXSA9IFtdO1xuICAgIFxuICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDwgY29sdW1ucy5sZW5ndGggLSAxOyBzdGVwKyspIHtcblxuICAgICAgbGV0IGNvbHVtbkxlbmd0aCA9IHRoaXMuZ2V0Q29sdW1uV2lkdGgoY29sdW1uc1tzdGVwXSwgdGFibGVSb3dzLCBzdGVwKTtcbiAgICAgIFxuICAgICAgaWYgKGNvbHVtbkxlbmd0aCA8PSBNYXRoLnJvdW5kKHRvdGFsV2lkdGggLyB0b3RhbExlbmd0aCkpIHtcbiAgICAgICAgd2lkdGhzLnB1c2goY29sdW1uTGVuZ3RoKTtcbiAgICAgICAgdG90YWxXaWR0aCAtPSBjb2x1bW5MZW5ndGg7XG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIHdpZHRocy5wdXNoKE1hdGgucm91bmQodG90YWxXaWR0aCAvIHRvdGFsTGVuZ3RoKSk7XG4gICAgICAgIHRvdGFsV2lkdGggLT0gTWF0aC5yb3VuZCgodG90YWxXaWR0aCAvIHRvdGFsTGVuZ3RoKSk7XG4gICAgICB9XG4gICAgICB0b3RhbExlbmd0aC0tO1xuICAgIH1cbiAgICB3aWR0aHMucHVzaCgnKicpO1xuICBcbiAgICB0aGlzLmFkZENvbnRlbnQoe1xuICAgICAgZm9udFNpemU6IDgsXG4gICAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJSb3dzOiAxLFxuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGJvZHk6IFt0YWJsZUhlYWRlciwgLi4udGFibGVSb3dzXVxuICAgICAgfSxcbiAgICAgIGxheW91dDoge1xuICAgICAgICBmaWxsQ29sb3I6IGkgPT4gKGkgPT09IDAgPyBDT0xPUlMuUFJJTUFSWSA6IG51bGwpLFxuICAgICAgICBoTGluZUNvbG9yOiAoKSA9PiBDT0xPUlMuUFJJTUFSWSxcbiAgICAgICAgaExpbmVXaWR0aDogKCkgPT4gMSxcbiAgICAgICAgdkxpbmVXaWR0aDogKCkgPT4gMFxuICAgICAgfVxuICAgIH0pLmFkZE5ld0xpbmUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZExpc3Qoe3RpdGxlLCBsaXN0fToge3RpdGxlOiBzdHJpbmcgfCB7dGV4dDogc3RyaW5nLCBzdHlsZTogc3RyaW5nfSwgbGlzdDogKHN0cmluZyB8IHt0ZXh0OiBzdHJpbmcsIHN0eWxlOiBzdHJpbmd9KVtdfSl7XG4gICAgcmV0dXJuIHRoaXNcbiAgICAgIC5hZGRDb250ZW50V2l0aE5ld0xpbmUodHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyA/IHt0ZXh0OiB0aXRsZSwgc3R5bGU6ICdoMid9IDogdGl0bGUpXG4gICAgICAuYWRkQ29udGVudCh7dWw6IGxpc3QuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudCl9KVxuICAgICAgLmFkZE5ld0xpbmUoKTtcbiAgfVxuXG4gIGFkZE5ld0xpbmUoKXtcbiAgICByZXR1cm4gdGhpcy5hZGRDb250ZW50KHt0ZXh0OiAnXFxuJ30pO1xuICB9XG5cbiAgYWRkQ29udGVudFdpdGhOZXdMaW5lKHRpdGxlOiBhbnkpe1xuICAgIHJldHVybiB0aGlzLmFkZENvbnRlbnQodGl0bGUpLmFkZE5ld0xpbmUoKTtcbiAgfVxuXG4gIGFkZEFnZW50c0ZpbHRlcnMoYWdlbnRzKXtcbiAgICBsb2coXG4gICAgICAncmVwb3J0aW5nOmFkZEFnZW50c0ZpbHRlcnMnLFxuICAgICAgYFN0YXJ0ZWQgdG8gcmVuZGVyIHRoZSBhdXRob3JpemVkIGFnZW50cyBmaWx0ZXJzYCxcbiAgICAgICdpbmZvJ1xuICAgICk7XG4gICAgbG9nKFxuICAgICAgJ3JlcG9ydGluZzphZGRBZ2VudHNGaWx0ZXJzJyxcbiAgICAgIGBhZ2VudHM6ICR7YWdlbnRzfWAsXG4gICAgICAnZGVidWcnXG4gICAgKTtcbiAgICBcbiAgICB0aGlzLmFkZE5ld0xpbmUoKTtcbiAgICBcbiAgICB0aGlzLmFkZENvbnRlbnQoe1xuICAgICAgdGV4dDpcbiAgICAgICAgJ05PVEU6IFRoaXMgcmVwb3J0IG9ubHkgaW5jbHVkZXMgdGhlIGF1dGhvcml6ZWQgYWdlbnRzIG9mIHRoZSB1c2VyIHdobyBnZW5lcmF0ZWQgdGhlIHJlcG9ydCcsXG4gICAgICBzdHlsZTogeyBmb250U2l6ZTogMTAsIGNvbG9yOiBDT0xPUlMuUFJJTUFSWSB9LFxuICAgICAgbWFyZ2luOiBbMCwgMCwgMCwgNV1cbiAgICB9KTtcblxuICAgIC8qVE9ETzogVGhpcyB3aWxsIGJlIGVuYWJsZWQgYnkgYSBjb25maWcqL1xuICAgIC8qIHRoaXMuYWRkQ29udGVudCh7XG4gICAgICBmb250U2l6ZTogOCxcbiAgICAgIHRhYmxlOiB7XG4gICAgICAgIHdpZHRoczogWycqJ10sXG4gICAgICAgIGJvZHk6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdmc6IGZpbHRlckljb25SYXcsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBbNDAsIDYsIDAsIDBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBgQWdlbnQgSURzOiAke2FnZW50c31gIHx8ICctJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogWzQzLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiA4LCBjb2xvcjogJyMzMzMnIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBtYXJnaW46IFstNDAsIDAsIC00MCwgMF0sXG4gICAgICBsYXlvdXQ6IHtcbiAgICAgICAgZmlsbENvbG9yOiAoKSA9PiBudWxsLFxuICAgICAgICBoTGluZVdpZHRoOiAoKSA9PiAwLFxuICAgICAgICB2TGluZVdpZHRoOiAoKSA9PiAwXG4gICAgICB9XG4gICAgfSk7ICovXG5cbiAgICB0aGlzLmFkZENvbnRlbnQoeyB0ZXh0OiAnXFxuJyB9KTtcbiAgICBsb2coXG4gICAgICAncmVwb3J0aW5nOmFkZEFnZW50c0ZpbHRlcnMnLFxuICAgICAgJ1RpbWUgcmFuZ2UgYW5kIGZpbHRlcnMgcmVuZGVyZWQnLFxuICAgICAgJ2RlYnVnJ1xuICAgICk7XG4gIH1cblxuICBhc3luYyBwcmludChyZXBvcnRQYXRoOiBzdHJpbmcpe1xuICAgIGNvbnN0IG5hbWVMb2dvID0gKCBhd2FpdCBnZXRDb25maWd1cmF0aW9uKCkgKVsnY3VzdG9taXphdGlvbi5sb2dvLnJlcG9ydHMnXSB8fCBSRVBPUlRTX0xPR09fSU1BR0VfQVNTRVRTX1JFTEFUSVZFX1BBVEg7XG5cbiAgICBjb25zdCBkb2N1bWVudCA9IHRoaXMuX3ByaW50ZXIuY3JlYXRlUGRmS2l0RG9jdW1lbnQoey4uLnBhZ2VDb25maWd1cmF0aW9uKG5hbWVMb2dvKSwgY29udGVudDogdGhpcy5fY29udGVudH0pO1xuICAgIGF3YWl0IGRvY3VtZW50LnBpcGUoXG4gICAgICBmcy5jcmVhdGVXcml0ZVN0cmVhbShyZXBvcnRQYXRoKVxuICAgICk7XG4gICAgZG9jdW1lbnQuZW5kKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2lkdGggb2YgYSBnaXZlbiBjb2x1bW5cbiAgICogXG4gICAqIEBwYXJhbSBjb2x1bW4gXG4gICAqIEBwYXJhbSB0YWJsZVJvd3MgXG4gICAqIEBwYXJhbSBzdGVwIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0Q29sdW1uV2lkdGgoY29sdW1uLCB0YWJsZVJvd3MsIGluZGV4KXtcbiAgICBjb25zdCB3aWR0aENoYXJhY3RlciA9IDU7IC8vbWluIHdpZHRoIHBlciBjaGFyYWN0ZXJcblxuICAgIC8vR2V0IHRoZSBsb25nZXN0IHJvdyB2YWx1ZVxuICAgIGNvbnN0IG1heFJvd0xlbmd0aCA9IHRhYmxlUm93cy5yZWR1Y2UoKG1heExlbmd0aCwgcm93KT0+e1xuICAgICAgcmV0dXJuIChyb3dbaW5kZXhdLnRleHQubGVuZ3RoID4gbWF4TGVuZ3RoID8gcm93W2luZGV4XS50ZXh0Lmxlbmd0aCA6IG1heExlbmd0aCk7XG4gICAgfSwwKTtcblxuICAgIC8vR2V0IGNvbHVtbiBuYW1lIGxlbmd0aFxuICAgIGNvbnN0IGhlYWRlckxlbmd0aCA9IGNvbHVtbi5sYWJlbC5sZW5ndGg7XG5cbiAgICAvL1VzZSB0aGUgbG9uZ2VzdCB0byBnZXQgdGhlIGNvbHVtbiB3aWR0aFxuICAgIGNvbnN0IG1heExlbmd0aCA9IG1heFJvd0xlbmd0aCA+IGhlYWRlckxlbmd0aCA/IG1heFJvd0xlbmd0aCA6IGhlYWRlckxlbmd0aDtcblxuICAgIHJldHVybiBtYXhMZW5ndGggKiB3aWR0aENoYXJhY3RlcjtcbiAgfVxufVxuIl19