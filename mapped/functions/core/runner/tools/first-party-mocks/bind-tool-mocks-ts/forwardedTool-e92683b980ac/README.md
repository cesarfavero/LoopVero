# `forwardedTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:555969-555999](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555969-L555999) | `FunctionDeclaration` | não | `tool, target, schema3, mocks, mockSchemas, unmocked` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555969-555999](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555969-L555999) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:555969

Chamadas escritas diretamente neste corpo: `communicateToolCall`, `jsonSchema2`, `withSafeParsedArgs`, `withSpotlightedToolResult`.

SHA-256 do trecho: `a399619a7e5fa151aac2490349579ba4e33abb203cc9cfac98eaa0dcfa9b07de`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
