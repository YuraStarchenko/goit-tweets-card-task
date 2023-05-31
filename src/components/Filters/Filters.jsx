import { Label, Icon, Select } from './Filters.styled';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <Label htmlFor="filter">
      <Select id="filter" value={filter} onChange={handleFilterChange}>
        <option value="show all">Show All</option>
        <option value="follow">Follow</option>
        <option value="following">Followings</option>
      </Select>
      <Icon />
    </Label>
  );
};

export default Filter;
