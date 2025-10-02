import React from 'react';

import Link from 'next/link';

import { Facebook, Linkedin, Twitter } from 'lucide-react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const formFields = [
  {
    label: 'Full name',
    name: 'fullName',
    placeholder: 'First and last name',
    type: 'text',
  },
  {
    label: 'Work email address',
    name: 'email',
    placeholder: 'me@company.com',
    type: 'email',
  },
  {
    label: 'Company name',
    name: 'company',
    placeholder: 'Company name',
    type: 'text',
    optional: true,
  },
  {
    label: 'Your message',
    name: 'message',
    placeholder: 'Write your message',
    type: 'textarea',
  },
];

export default function Contact() {
  return (
    <section className="font-playfair py-32 lg:py-32">
      <div className="container max-w-4xl text-white/80">
        <h1 className="text-left text-4xl font-semibold tracking-tight text-white/80 sm:text-5xl">
          Contact us
        </h1>
        {/* <p className="text-muted-foreground mt-4 text-left">
          Hopefully this form gets through our spam filters.
        </p> */}

        <div className="mt-8 flex max-md:flex-col md:mt-12 md:divide-x lg:mt-20">
          {/* Contact Information */}
          <div className="space-y-10 md:pe-14">
            <div>
              <h2 className="text-xl font-semibold">Address</h2>
              <p className="text-muted-foreground mt-2 text-lg font-medium tracking-tight">
                The Capital Plaza - Podgorica
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Email us</h2>
              <div className="mt-2 space-y-2">
                <div>
                  <Link
                    href="mailto:careers@streamline.com"
                    className="mt-3 text-base font-medium tracking-tight text-white"
                  >
                    info@babi.me
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Follow us</h2>
              <div className="mt-3 flex gap-6">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Facebook className="size-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="size-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="size-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="mt-16 flex-1 md:mt-0 md:ps-8">
            <h2 className="text-lg font-semibold">Inquiries</h2>
            <form className="mt-5 space-y-5">
              {formFields.map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <Label>
                    {field.label}
                    {field.optional && (
                      <span className="text-muted-foreground/60">
                        {' '}
                        (optional)
                      </span>
                    )}
                  </Label>
                  {field.type === 'textarea' ? (
                    <Textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      className="min-h-[120px] resize-none"
                    />
                  ) : (
                    <Input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}

              <div className="flex justify-end">
                <Button type="submit" size="lg">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
