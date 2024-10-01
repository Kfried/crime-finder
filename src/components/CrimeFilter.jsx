import React from 'react';

function CrimeFilter({ categories, selectedCategory, onCategoryChange })
{
    return (
        <div className="crime-filter">
            <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                <option value="">Select a crime category</option>
                {categories.map(category => (
                    <option key={category.url} value={category.url}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CrimeFilter;