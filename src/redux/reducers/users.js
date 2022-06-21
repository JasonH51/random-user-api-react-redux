import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    allUsers: [],
    renderUsers: [],
    recentlyViewed: [],
    page: 1
  },
  reducers: {
    updateAllUsers: (state, action) => {
      // get all users from api
      // set the first few users we want to render on first load
      state.allUsers = action.payload;
      state.renderUsers = action.payload;
    },
    updateSearch: (state, action) => {
      // filter by full name
      const searchedValue = action.payload.toLowerCase();
      if (searchedValue.length) {
        const searched = state.allUsers.filter(user => {
          const fullName = `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`;
          // remove slice to search by any letter in full name
          return fullName.slice(0, searchedValue.length).includes(searchedValue);
        });
        state.renderUsers = searched;
        state.page = 1;
      } else {
        state.renderUsers = state.allUsers;
        state.page = 1;
      }
    },
    updateRecentlyViewed: (state, action) => {
      //add users to list when clicked on
      state.recentlyViewed.push(action.payload);
    },
    updatePage: (state, action) => {
      // update page and control for valid pages
      if (action.payload >= 1) {
        state.page = action.payload;
      }
    }
  }
});

export const {updateAllUsers, updateRenderUsers, updateSearch, updatePage, updateRecentlyViewed} =
  userSlice.actions;

export default userSlice.reducer;
