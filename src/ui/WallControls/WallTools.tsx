import { Group, Button, createStyles } from "@mantine/core";
import { useStore } from "../../stores/ToolStore";

const useStyles = createStyles((theme) => ({
  button: {
    borderRadius: 0,

    '&:not(:first-of-type)': {
      borderLeftWidth: 0,
    },

    '&:first-of-type': {
      borderTopLeftRadius: theme.radius.sm,
      borderBottomLeftRadius: theme.radius.sm,
    },

    '&:last-of-type': {
      borderTopRightRadius: theme.radius.sm,
      borderBottomRightRadius: theme.radius.sm,
    },
  },
}));

// const tools = [
//   { label: 'Add', tool:Tool.WallAdd },
//   { label: 'Edit', tool:Tool.WallEdit },
//   { label: 'Remove', tool:Tool.WallRemove }
// ];

export function WallTools() {
  const { classes } = useStyles();
  const { setTool } = useStore()

  // const toolButtons = tools.map((link, _) => (
  //   <Button variant="default" className={classes.button}
  //     {...link}
  //     key={link.label}
  //     onClick={() => {
  //       setTool(link.tool)
  //     }
  //     }
  //   > {link.label}</Button>
  // ));

  return (
    <Group grow spacing={0}>
      {/* {toolButtons} */}
    </Group>
  );
}
