# `resolveSendMessageSecretTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-secret-request.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-secret-request-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758381-758396](../../../../../../../reference/runtime/host-main.cjs#L758381-L758396) | `FunctionDeclaration` | sim | `secret, resolve31` |
| [evaluation:548040-548055](../../../../../../../reference/runtime/sand-eval-runner.cjs#L548040-L548055) | `FunctionDeclaration` | sim | `secret, resolve19` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758381-758396](../../../../../../../reference/runtime/host-main.cjs#L758381-L758396) | 6 | 0 | 1 | 3 | 2 | 1 |
| [evaluation:548040-548055](../../../../../../../reference/runtime/sand-eval-runner.cjs#L548040-L548055) | 6 | 0 | 1 | 3 | 2 | 1 |

### host:758381

Chamadas escritas diretamente neste corpo: `boxEnvSecretTarget`, `new SandToolInputError`, `resolve31`, `resolve31.afterRefusal`.

Alvos de lançamento explícito: `SandToolInputError`, `error64`.

SHA-256 do trecho: `1a3963618cffa63c203ba5552c63b94200726bc66e12707e6dd025bf8e3e7e66`.

### evaluation:548040

Chamadas escritas diretamente neste corpo: `boxEnvSecretTarget`, `new SandToolInputError`, `resolve19`, `resolve19.afterRefusal`.

Alvos de lançamento explícito: `SandToolInputError`, `error63`.

SHA-256 do trecho: `88070f02d3eaaa29aad65adc25fdebadb0a073101911c0da5831ac58ef3e5edf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
