import WidgetFeedback from './Feedback/WidgetFeedback/WidgetFeedback'
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101'
      }}
    >
      <WidgetFeedback />
    </div>
  );
};
