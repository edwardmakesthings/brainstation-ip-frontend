import React, { useState } from "react";
import {
    Text,
    Button,
    Divider,
    Input,
    Textarea,
    Avatar,
    Toolbar,
    ToolbarButton,
    ToolbarDivider,
    FluentProvider,
    Label,
} from "@fluentui/react-components";
import {
    TextBold24Regular,
    TextItalic24Regular,
    TextUnderline24Regular,
    TextBulletList24Regular,
    Link24Regular,
    Attach24Regular,
    Send24Regular,
    Delete24Regular,
    ChevronDown24Regular,
    MoreVertical24Regular,
    Dismiss24Regular,
    ArrowMinimize24Regular,
    Square24Regular,
    TextIndentIncrease24Regular,
    TextIndentDecrease24Regular,
} from "@fluentui/react-icons";

const OutlookEmailComposer = () => {
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [to, setTo] = useState("");
    const [cc, setCc] = useState("");
    const [showCc, setShowCc] = useState(false);
    const [showBcc, setShowBcc] = useState(false);

    return (
        <FluentProvider>
            <div className="bg-gray-100 p-6 h-screen flex items-start justify-center">
                <div className="w-full max-w-3xl bg-white border border-gray-200 shadow-md rounded">
                    {/* Email header */}
                    <div className="bg-gray-100 p-3 flex justify-between items-center border-b border-gray-200">
                        <Text weight="semibold" size={500}>
                            New Message
                        </Text>
                        <div className="flex">
                            <Button
                                icon={<ArrowMinimize24Regular />}
                                appearance="transparent"
                                size="small"
                                aria-label="Minimize"
                            />
                            <Button
                                icon={<Square24Regular />}
                                appearance="transparent"
                                size="small"
                                aria-label="Pop out"
                            />
                            <Button
                                icon={<Dismiss24Regular />}
                                appearance="transparent"
                                size="small"
                                aria-label="Close"
                            />
                        </div>
                    </div>

                    {/* Email content */}
                    <div className="p-4">
                        {/* Recipients */}
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <div className="w-12">
                                    <Label>To:</Label>
                                </div>
                                <div className="flex-1">
                                    <Input
                                        placeholder="Add recipients"
                                        value={to}
                                        onChange={(e, data) =>
                                            setTo(data.value)
                                        }
                                        appearance="underline"
                                    />
                                </div>
                                <div className="flex">
                                    <Button
                                        appearance="transparent"
                                        onClick={() => setShowCc(!showCc)}
                                    >
                                        Cc
                                    </Button>
                                    <Button
                                        appearance="transparent"
                                        onClick={() => setShowBcc(!showBcc)}
                                    >
                                        Bcc
                                    </Button>
                                </div>
                            </div>

                            {showCc && (
                                <div className="flex items-center">
                                    <div className="w-12">
                                        <Label>Cc:</Label>
                                    </div>
                                    <div className="flex-1">
                                        <Input
                                            placeholder="Add carbon copy recipients"
                                            value={cc}
                                            onChange={(e, data) =>
                                                setCc(data.value)
                                            }
                                            appearance="underline"
                                        />
                                    </div>
                                </div>
                            )}

                            {showBcc && (
                                <div className="flex items-center">
                                    <div className="w-12">
                                        <Label>Bcc:</Label>
                                    </div>
                                    <div className="flex-1">
                                        <Input
                                            placeholder="Add blind carbon copy recipients"
                                            appearance="underline"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Subject */}
                            <div className="flex items-center">
                                <div className="w-12">
                                    <Label>Subject:</Label>
                                </div>
                                <div className="flex-1">
                                    <Input
                                        placeholder="Add a subject"
                                        value={subject}
                                        onChange={(e, data) =>
                                            setSubject(data.value)
                                        }
                                        appearance="underline"
                                    />
                                </div>
                            </div>
                        </div>

                        <Divider className="my-3" />

                        {/* Formatting toolbar */}
                        <Toolbar aria-label="Formatting options">
                            <ToolbarButton
                                icon={<TextBold24Regular />}
                                aria-label="Bold"
                            />
                            <ToolbarButton
                                icon={<TextItalic24Regular />}
                                aria-label="Italic"
                            />
                            <ToolbarButton
                                icon={<TextUnderline24Regular />}
                                aria-label="Underline"
                            />
                            <ToolbarDivider />
                            <ToolbarButton
                                icon={<TextBulletList24Regular />}
                                aria-label="Bulleted list"
                            />
                            <ToolbarDivider />
                            <ToolbarButton
                                icon={<TextIndentIncrease24Regular />}
                                aria-label="Increase indent"
                            />
                            <ToolbarButton
                                icon={<TextIndentDecrease24Regular />}
                                aria-label="Decrease indent"
                            />
                            <ToolbarDivider />
                            <ToolbarButton
                                icon={<Link24Regular />}
                                aria-label="Insert link"
                            />
                            <ToolbarButton
                                icon={<Attach24Regular />}
                                aria-label="Attach file"
                            />
                        </Toolbar>

                        <Divider className="my-3" />

                        {/* Email body */}
                        <Textarea
                            placeholder="Type your message here"
                            value={body}
                            onChange={(e, data) => setBody(data.value)}
                            style={{
                                minHeight: "300px",
                                width: "100%",
                                resize: "none",
                                border: "none",
                            }}
                            appearance="outline-none"
                        />

                        <Divider className="my-3" />

                        {/* Email footer */}
                        <div className="flex justify-between items-center py-2">
                            <div className="flex items-center space-x-2">
                                <Button
                                    appearance="primary"
                                    icon={<Send24Regular />}
                                >
                                    Send
                                </Button>
                                <Button
                                    icon={<ChevronDown24Regular />}
                                    appearance="transparent"
                                    size="small"
                                    aria-label="More send options"
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Button
                                    icon={<Delete24Regular />}
                                    appearance="transparent"
                                    size="small"
                                    aria-label="Discard draft"
                                />
                                <Button
                                    icon={<MoreVertical24Regular />}
                                    appearance="transparent"
                                    size="small"
                                    aria-label="More options"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email signature */}
                    <div className="px-4 pb-4">
                        <Divider className="mb-3" />
                        <div className="flex items-center">
                            <Avatar
                                name="Your Name"
                                size={24}
                                color="colorful"
                            />
                            <Text className="ml-2 text-sm text-gray-600">
                                Your Name | Your Position | Your Organization
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </FluentProvider>
    );
};

export default OutlookEmailComposer;
