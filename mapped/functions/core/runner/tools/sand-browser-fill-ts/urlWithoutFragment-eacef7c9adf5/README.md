# `urlWithoutFragment`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727306-727311](../../../../../../../reference/runtime/host-main.cjs#L727306-L727311) | `FunctionDeclaration` | não | `url2` |
| [evaluation:561812-561817](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561812-L561817) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727306-727311](../../../../../../../reference/runtime/host-main.cjs#L727306-L727311) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:561812-561817](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561812-L561817) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:727306

Chamadas escritas diretamente neste corpo: `URL.canParse`, `new URL`.

Alvos de atribuição ou incremento: `parsed2.hash`.

SHA-256 do trecho: `2b4312ef0e9894ff125b8dad489f906f72c5092f0cb74389e705b830b64ebc05`.

### evaluation:561812

Chamadas escritas diretamente neste corpo: `URL.canParse`, `new URL`.

Alvos de atribuição ou incremento: `parsed.hash`.

SHA-256 do trecho: `1a407217036d5dd0c64f28dbcb8f5f35e2a63b7399af26ec4b623300b094eefc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
