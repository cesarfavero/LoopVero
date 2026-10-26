# `imageSize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755764-755767](../../../../../../../../reference/runtime/host-main.cjs#L755764-L755767) | `FunctionDeclaration` | não | `attributes, name18` |
| [evaluation:541639-541642](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541639-L541642) | `FunctionDeclaration` | não | `attributes, name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755764-755767](../../../../../../../../reference/runtime/host-main.cjs#L755764-L755767) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541639-541642](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541639-L541642) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755764

Chamadas escritas diretamente neste corpo: `/^\d{1,4}$/.test`, `attributes.get`.

SHA-256 do trecho: `7c9f242d43bee596241fe24f1885f6d146ae95ee98060659bcbe95ef1a323a57`.

### evaluation:541639

Chamadas escritas diretamente neste corpo: `/^\d{1,4}$/.test`, `attributes.get`.

SHA-256 do trecho: `7c9f242d43bee596241fe24f1885f6d146ae95ee98060659bcbe95ef1a323a57`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
