
import React, { useState } from 'react';
import { 
  GALLERY_CATEGORIES,
  CONTENT_TYPES,
  SORT_OPTIONS,
  VIEW_MODES,
  YEAR_OPTIONS
} from '../../data/galleryConstants';
import { useGallery } from './GalleryContext';
import { Search, X, Filter, MoonStar, Sun, Grid, Layout, List } from 'lucide-react';

const GalleryFilters: React.FC = () => {
  const {
    selectedFilter,
    setSelectedFilter,
    setViewMode,
    setSortOption,
    viewMode,
    sortOption,
    nightMode,
    toggleNightMode,
    resetFilters
  } = useGallery();

  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  
  const toggleCategory = (category: any) => {
    if (selectedFilter.category.includes(category)) {
      setSelectedFilter({
        category: selectedFilter.category.filter(c => c !== category)
      });
    } else {
      setSelectedFilter({
        category: [...selectedFilter.category, category]
      });
    }
  };

  const toggleContentType = (contentType: any) => {
    if (selectedFilter.contentType.includes(contentType)) {
      setSelectedFilter({
        contentType: selectedFilter.contentType.filter(c => c !== contentType)
      });
    } else {
      setSelectedFilter({
        contentType: [...selectedFilter.contentType, contentType]
      });
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const yearValue = parseInt(e.target.value);
    setSelectedFilter({ year: yearValue === 0 ? null : yearValue });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilter({ search: e.target.value });
  };

  const toggleFilters = () => {
    setIsFilterExpanded(prev => !prev);
  };

  const handleViewModeChange = (mode: 'masonry' | 'grid' | 'list') => {
    setViewMode(mode);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  return (
    <div className={`transition-colors duration-300 ${nightMode ? 'bg-indigo-dark' : 'bg-cream'}`}>
      {/* Top bar with search and toggle buttons */}
      <div className="sticky top-16 z-30 border-b border-border p-4 transition-colors duration-300">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className={`w-5 h-5 ${nightMode ? 'text-cream/70' : 'text-indigo/70'}`} />
            </div>
            <input
              type="text"
              value={selectedFilter.search}
              onChange={handleSearch}
              placeholder="Search the gallery"
              className={`w-full py-2 pl-10 pr-4 rounded-lg border border-border focus:outline-none focus:ring-2 transition-colors ${
                nightMode 
                  ? 'bg-indigo text-cream placeholder-cream/50 focus:ring-festival-blue' 
                  : 'bg-white text-indigo placeholder-indigo/50 focus:ring-festival-red'
              }`}
            />
            {selectedFilter.search && (
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setSelectedFilter({ search: '' })}
              >
                <X className="w-4 h-4 text-indigo-light" />
              </button>
            )}
          </div>

          {/* Controls Group */}
          <div className="flex items-center space-x-2">
            {/* View Mode Toggle */}
            <div className={`inline-flex rounded-md border border-border shadow-sm ${nightMode ? 'bg-indigo' : 'bg-white'}`}>
              <button 
                onClick={() => handleViewModeChange('masonry')}
                className={`p-2 first:rounded-l-md ${viewMode === 'masonry' 
                  ? 'bg-festival-blue text-white' 
                  : nightMode ? 'text-cream hover:bg-indigo-light/20' : 'text-indigo hover:bg-cream'} 
                transition-colors`}
                title="Masonry View"
              >
                <Layout className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleViewModeChange('grid')}
                className={`p-2 ${viewMode === 'grid' 
                  ? 'bg-festival-blue text-white' 
                  : nightMode ? 'text-cream hover:bg-indigo-light/20' : 'text-indigo hover:bg-cream'} 
                transition-colors`}
                title="Grid View"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleViewModeChange('list')}
                className={`p-2 last:rounded-r-md ${viewMode === 'list' 
                  ? 'bg-festival-blue text-white' 
                  : nightMode ? 'text-cream hover:bg-indigo-light/20' : 'text-indigo hover:bg-cream'} 
                transition-colors`}
                title="List View"
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortOption}
              onChange={handleSortChange}
              className={`rounded-md border border-border px-3 py-2 cursor-pointer ${
                nightMode 
                  ? 'bg-indigo text-cream' 
                  : 'bg-white text-indigo'
              }`}
            >
              {SORT_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Night Mode Toggle */}
            <button
              onClick={toggleNightMode}
              className={`p-2 rounded-md transition-colors ${
                nightMode 
                  ? 'bg-indigo-light/20 text-cream hover:bg-indigo-light/40' 
                  : 'bg-cream text-indigo hover:bg-festival-cream-dark'
              }`}
              title={nightMode ? 'Light Mode' : 'Night Mode'}
            >
              {nightMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <MoonStar className="w-5 h-5" />
              )}
            </button>

            {/* Filter Toggle */}
            <button
              onClick={toggleFilters}
              className={`p-2 rounded-md transition-colors ${
                nightMode 
                  ? 'bg-indigo-light/20 text-cream hover:bg-indigo-light/40' 
                  : 'bg-cream text-indigo hover:bg-festival-cream-dark'
              }`}
              title="Toggle Filters"
            >
              <Filter className="w-5 h-5" />
            </button>

            {/* Reset Filters */}
            {(selectedFilter.category.length > 0 || 
              selectedFilter.contentType.length > 0 || 
              selectedFilter.year || 
              selectedFilter.search) && (
              <button
                onClick={resetFilters}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  nightMode 
                    ? 'bg-festival-red/80 text-white hover:bg-festival-red' 
                    : 'bg-festival-red text-white hover:bg-festival-red-dark'
                }`}
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Expanded Filters Section */}
        {isFilterExpanded && (
          <div className={`mt-4 p-4 rounded-lg border border-border transition-colors ${
            nightMode ? 'bg-indigo-light/10 border-indigo-light/20' : 'bg-white border-festival-blue/10'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Categories */}
              <div>
                <h3 className={`font-medium mb-2 ${nightMode ? 'text-cream' : 'text-indigo'}`}>Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {GALLERY_CATEGORIES.map(category => (
                    <button
                      key={category.value}
                      onClick={() => toggleCategory(category.value)}
                      className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        selectedFilter.category.includes(category.value)
                          ? 'bg-festival-blue text-white'
                          : nightMode 
                            ? 'bg-indigo-light/20 text-cream hover:bg-indigo-light/40' 
                            : 'bg-gray-100 text-indigo hover:bg-gray-200'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Type */}
              <div>
                <h3 className={`font-medium mb-2 ${nightMode ? 'text-cream' : 'text-indigo'}`}>Content Type</h3>
                <div className="flex flex-wrap gap-2">
                  {CONTENT_TYPES.map(type => (
                    <button
                      key={type.value}
                      onClick={() => toggleContentType(type.value)}
                      className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        selectedFilter.contentType.includes(type.value)
                          ? 'bg-festival-green text-white'
                          : nightMode 
                            ? 'bg-indigo-light/20 text-cream hover:bg-indigo-light/40' 
                            : 'bg-gray-100 text-indigo hover:bg-gray-200'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Year */}
              <div>
                <h3 className={`font-medium mb-2 ${nightMode ? 'text-cream' : 'text-indigo'}`}>Year</h3>
                <select
                  value={selectedFilter.year ?? 0}
                  onChange={handleYearChange}
                  className={`w-full rounded-md border border-border px-3 py-2 ${
                    nightMode 
                      ? 'bg-indigo text-cream' 
                      : 'bg-white text-indigo'
                  }`}
                >
                  {YEAR_OPTIONS.map(year => (
                    <option key={year.value} value={year.value}>
                      {year.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryFilters;
