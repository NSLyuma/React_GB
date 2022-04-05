import { nanoid } from "nanoid";
import { useCreateForm } from "../../hooks/useCreateForm";
import { useDispatch, useSelector } from "react-redux";
import { createChatThunk, deleteChatThunk } from "../../store/chats/actions";
import { getChatList } from "../../store/chats/selectors";
import { ChatsPresenter } from "./ChatsPresenter";

export function Chats({ children }) {
  const chatList = useSelector(getChatList);

  const dispatch = useDispatch();

  const addNewChat = (name) => {
    const chat = { id: nanoid(), name };

    dispatch(createChatThunk(chat));
  };

  const removeChat = (id) => () => {
    dispatch(deleteChatThunk(id));
  };

  const { handleSubmit, onChangeInput, inputValue } = useCreateForm({
    onSubmit: addNewChat,
  });

  return (
    <ChatsPresenter
      chatList={chatList}
      removeChat={removeChat}
      handleSubmit={handleSubmit}
      onChangeInput={onChangeInput}
      inputValue={inputValue}
      children={children}
    />
  );
}
