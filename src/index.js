import EmojiPicker from "rm-emoji-picker";

export default ({
    label = 'emoji', tag = 'span', className, group
}) => {
  const picker = new EmojiPicker();
  return {
    label,
    tag,
    className,
    group,
    action: 'extra',
    onClick: () => {
      console.log('test');
    }
  }
};