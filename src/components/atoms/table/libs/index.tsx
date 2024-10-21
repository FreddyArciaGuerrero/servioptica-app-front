const localeText = {
    noRowsLabel: 'No hay datos encontrados',
    noResultsOverlayLabel: 'No se encontraron resultados',
    toolbarDensity: 'Densidad',
    toolbarDensityLabel: 'Densidad',
    toolbarDensityCompact: 'Compacta',
    toolbarDensityStandard: 'Estándar',
    toolbarDensityComfortable: 'Cómoda',
    toolbarColumns: 'Columnas',
    toolbarColumnsLabel: 'Seleccionar columnas',
    toolbarFilters: 'Filtros',
    toolbarFiltersLabel: 'Mostrar filtros',
    toolbarFiltersTooltipHide: 'Ocultar filtros',
    toolbarFiltersTooltipShow: 'Mostrar filtros',
    toolbarFiltersTooltipActive: (count: any) =>
      count !== 1 ? `${count} filtros activos` : `${count} filtro activo`,
    toolbarQuickFilterPlaceholder: 'Buscar...',
    toolbarQuickFilterLabel: 'Filtro rápido',
    toolbarQuickFilterDeleteIconLabel: 'Limpiar filtro rápido',
    toolbarExport: 'Exportar',
    toolbarExportLabel: 'Exportar',
    toolbarExportCSV: 'Descargar CSV',
    toolbarExportPrint: 'Imprimir',
    toolbarExportExcel: 'Descargar Excel',
    columnsManagementSearchTitle: 'Buscar columna',
    columnsManagementNoColumns: 'No hay columnas disponibles',
    columnsManagementShowHideAllText: 'Mostrar/Ocultar todo',
    columnsManagementReset: 'Restablecer',
    filterPanelAddFilter: 'Añadir filtro',
    filterPanelRemoveAll: 'Eliminar todo',
    filterPanelDeleteIconLabel: 'Eliminar',
    filterPanelLogicOperator: 'Operador lógico',
    filterPanelOperator: 'Operador',
    filterPanelOperatorAnd: 'Y',
    filterPanelOperatorOr: 'O',
    filterPanelColumns: 'Columnas',
    filterPanelInputLabel: 'Valor',
    filterPanelInputPlaceholder: 'Valor del filtro',
    filterOperatorContains: 'Contiene',
    filterOperatorDoesNotContain: 'No contiene',
    filterOperatorEquals: 'Igual a',
    filterOperatorDoesNotEqual: 'No es igual a',
    filterOperatorStartsWith: 'Empieza con',
    filterOperatorEndsWith: 'Termina con',
    filterOperatorIs: 'Es',
    filterOperatorNot: 'No es',
    filterOperatorAfter: 'Es posterior',
    filterOperatorOnOrAfter: 'Es en o después',
    filterOperatorBefore: 'Es anterior',
    filterOperatorOnOrBefore: 'Es en o antes',
    filterOperatorIsEmpty: 'Está vacío',
    filterOperatorIsNotEmpty: 'No está vacío',
    filterOperatorIsAnyOf: 'Es cualquiera de',
    'filterOperator=': 'Igual a',
    'filterOperator!=': 'No es igual a',
    'filterOperator>': 'Mayor que',
    'filterOperator>=': 'Mayor o igual que',
    'filterOperator<': 'Menor que',
    'filterOperator<=': 'Menor o igual que',
    headerFilterOperatorContains: 'Contiene',
    headerFilterOperatorDoesNotContain: 'No contiene',
    headerFilterOperatorEquals: 'Igual a',
    headerFilterOperatorDoesNotEqual: 'No es igual a',
    headerFilterOperatorStartsWith: 'Empieza con',
    headerFilterOperatorEndsWith: 'Termina con',
    headerFilterOperatorIs: 'Es',
    headerFilterOperatorNot: 'No es',
    headerFilterOperatorAfter: 'Es posterior',
    headerFilterOperatorOnOrAfter: 'Es en o después',
    headerFilterOperatorBefore: 'Es anterior',
    headerFilterOperatorOnOrBefore: 'Es en o antes',
    headerFilterOperatorIsEmpty: 'Está vacío',
    headerFilterOperatorIsNotEmpty: 'No está vacío',
    headerFilterOperatorIsAnyOf: 'Es cualquiera de',
    'headerFilterOperator=': 'Igual a',
    'headerFilterOperator!=': 'No es igual a',
    'headerFilterOperator>': 'Mayor que',
    'headerFilterOperator>=': 'Mayor o igual que',
    'headerFilterOperator<': 'Menor que',
    'headerFilterOperator<=': 'Menor o igual que',
    filterValueAny: 'Cualquiera',
    filterValueTrue: 'Verdadero',
    filterValueFalse: 'Falso',
    columnMenuLabel: 'Menú',
    columnMenuShowColumns: 'Mostrar columnas',
    columnMenuManageColumns: 'Administrar columnas',
    columnMenuFilter: 'Filtrar',
    columnMenuHideColumn: 'Ocultar columna',
    columnMenuUnsort: 'Desordenar',
    columnMenuSortAsc: 'Orden ascendente',
    columnMenuSortDesc: 'Orden descendente',
    columnHeaderFiltersTooltipActive: (count: any) =>
      count !== 1 ? `${count} filtros activos` : `${count} filtro activo`,
    columnHeaderFiltersLabel: 'Mostrar filtros',
    columnHeaderSortIconLabel: 'Ordenar',
    footerRowSelected: (count: any) =>
      count !== 1 ? `${count.toLocaleString()} filas seleccionadas` : `${count.toLocaleString()} fila seleccionada`,
    footerTotalRows: 'Total de filas:',
    footerTotalVisibleRows: (visibleCount: any, totalCount: any) =>
      `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,
    checkboxSelectionHeaderName: 'Selección por casilla',
    checkboxSelectionSelectAllRows: 'Seleccionar todas las filas',
    checkboxSelectionUnselectAllRows: 'Deseleccionar todas las filas',
    checkboxSelectionSelectRow: 'Seleccionar fila',
    checkboxSelectionUnselectRow: 'Deseleccionar fila',
    booleanCellTrueLabel: 'Verdadero',
    booleanCellFalseLabel: 'Falso',
    actionsCellMore: 'Más',
    pinToLeft: 'Anclar a la izquierda',
    pinToRight: 'Anclar a la derecha',
    unpin: 'Desanclar',
    treeDataGroupingHeaderName: 'Agrupación',
    treeDataExpand: 'Expandir',
    treeDataCollapse: 'Colapsar',
    groupingColumnHeaderName: 'Agrupación',
    groupColumn: (name: any) => `Agrupar por ${name}`,
    unGroupColumn: (name: any) => `Dejar de agrupar por ${name}`,
    detailPanelToggle: 'Alternar panel de detalles',
    expandDetailPanel: 'Expandir',
    collapseDetailPanel: 'Colapsar',
    rowReorderingHeaderName: 'Reordenación de filas',
    aggregationMenuItemHeader: 'Función de agregación',
    aggregationFunctionLabelSum: 'Suma',
    aggregationFunctionLabelAvg: 'Promedio',
    aggregationFunctionLabelMin: 'Mínimo',
    aggregationFunctionLabelMax: 'Máximo',
    aggregationFunctionLabelSize: 'Tamaño',
    MuiTablePagination: {
      labelRowsPerPage: 'Filas por página:',
      labelDisplayedRows: ({ from, to, count }: any) =>
        `${from}-${to} de ${count !== -1 ? count : `más de ${to}`}`,
    //   firstIconButtonText: 'Primera página',
    //   lastIconButtonText: 'Última página',
    //   nextIconButtonText: 'Página siguiente',
    //   previousIconButtonText: 'Página anterior',
    },
  };


  export {localeText};

  export * from './dashColumns'
  export * from './generalColumnProps'
  