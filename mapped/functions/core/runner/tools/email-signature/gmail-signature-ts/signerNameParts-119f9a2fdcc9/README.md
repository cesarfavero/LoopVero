# `signerNameParts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755746-755753](../../../../../../../../reference/runtime/host-main.cjs#L755746-L755753) | `FunctionDeclaration` | não | `{   sender,   sendingAddress }` |
| [evaluation:541621-541628](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541621-L541628) | `FunctionDeclaration` | não | `{   sender,   sendingAddress }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755746-755753](../../../../../../../../reference/runtime/host-main.cjs#L755746-L755753) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541621-541628](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541621-L541628) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755746

Chamadas escritas diretamente neste corpo: `.filter`, `.split`, `.test`, `displayName2.includes`, `new RegExp`, `sender.replace`, `sendingAddress.split`, `source.toLocaleLowerCase`.

SHA-256 do trecho: `80fc7498fdaa49408595fdd36cb4d4758cb7c41250b5033882ca390c573c5780`.

### evaluation:541621

Chamadas escritas diretamente neste corpo: `.filter`, `.split`, `.test`, `displayName2.includes`, `new RegExp`, `sender.replace`, `sendingAddress.split`, `source.toLocaleLowerCase`.

SHA-256 do trecho: `80fc7498fdaa49408595fdd36cb4d4758cb7c41250b5033882ca390c573c5780`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
