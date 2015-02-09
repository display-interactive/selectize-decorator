(function($) {
    'use strict';

    window.selectizeDecorator = {
        /** @see https://github.com/brianreavis/selectize.js/blob/master/docs/usage.md */
        delimiter: ',',
        diacritics: true,
        create: false,
        "create-on-blur": false,
        "create-filter": null,
        highlight: true,
        persist: true,
        "open-on-focus": true,
        "max-options": 1000,
        "max-items": undefined,
        "hide-selected": true,
        "close-after-select": false,
        "allow-empty-option": false,
        "scroll-duration": 60,
        "load-throttle": 300,
        "loading-class": 'loading',
        preload: false,
        "dropdown-parent": null,
        "add-precedence": false,
        "select-on-tab": false,
        options: [],
        optgroups: [],
        "data-attr": 'data-data',
        "value-field": 'value',
        "optgroup-value-field": 'value',
        "label-field": 'text',
        "optgroup-label-field": 'label',
        "optgroup-field": 'optgroup',
        "sort-field": '$order',
        "search-field": ['text'],
        "search-conjunction": 'and',
        "lock-optgroup-order": false,
        "copy-classes-to-dropdown": true,

        load: null,
        score: null,
        "on-initialize": null,
        "on-focus": null,
        "on-blur": null,
        "on-change": null,
        "on-item-add": null,
        "on-item-remove": null,
        "on-clear": null,
        "on-delete": null,
        "on-option-add": null,
        "on-option-remove": null,
        "on-dropdown-open": null,
        "on-dropdown-close": null,
        "on-type": null,
        "on-load": null,


        /**
         * Constructor
         */
        ready: function() {
            var field = this.querySelector('select, input');
            var options = {
                delimiter: this.delimiter,
                diacritics: this.diacritics,
                create: this.create,
                createOnBlur: this["create-on-blur"],
                createFilter: this["create-filter"],
                highlight: this.highlight,
                persist: this.persist,
                openOnFocus: this["open-on-focus"],
                maxOptions: this["max-options"],
                maxItems: this["max-items"],
                hideSelected: this["hide-selected"],
                closeAfterSelect: this["close-after-select"],
                allowEmptyOption: this["allow-empty-option"],
                scrollDuration: this["scroll-duration"],
                loadThrottle: this["load-throttle"],
                loadingClass: this["loading-class"],
                preload: this.preload,
                dropdownParent: this["dropdown-parent"],
                addPrecedence: this["add-precedence"],
                selectOnTab: this["select-on-tab"],
                options: this.options,
                optgroups: this.optgroups,
                dataAttr: this["data-attr"],
                valueField: this["value-field"],
                optgroupValueField: this["optgroup-value-field"],
                labelField: this["label-field"],
                optgroupLabelField: this["optgroup-label-field"],
                optgroupField: this["optgroup-field"],
                sortField: this["sort-field"],
                searchField: this["search-field"],
                searchConjunction: this["search-conjunction"],
                lockOptgroupOrder: this["lock-optgroup-order"],
                copyClassesToDropdown: this["copy-classes-to-dropdown"],

                load: this.load,
                score: this.score,
                onInitialize: this["on-initialize"],
                onFocus: this["on-focus"],
                onBlur: this["on-blur"],
                onChange: this["on-change"],
                onItemAdd: this["on-item-add"],
                onItemRemove: this["on-item-remove"],
                onClear: this["on-clear"],
                onDelete: this["on-delete"],
                onOptionAdd: this["on-option-add"],
                onOptionRemove: this["on-option-remove"],
                onDropdownOpen: this["on-dropdown-open"],
                onDropdownClose: this["on-dropdown-close"],
                onType: this["on-type"],
                onLoad: this["on-load"]
            };

            $(field).selectize(options);
        }
    }
}(jQuery));