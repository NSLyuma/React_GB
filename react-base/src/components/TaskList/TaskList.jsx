import { Checkbox, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getTaskLink } from "../../navigation";
import { TaskItem } from "../TaskItem/TaskItem";
import style from "./TaskList.module.sass";

export const TaskList = ({ filteredList, onChange }) => {
  const { projectId } = useParams();

  return (
    <List>
      {filteredList.map(({ status, text, id }, index) => {
        return (
          <ListItem
            component={Link}
            to={getTaskLink(projectId, id)}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={onChange(index, status)}
                checked={status}
              />
            }
            key={id}
          >
            <ListItemText>{text}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};
