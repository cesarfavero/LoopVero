# `resolveEffectiveToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/effective-tool-call.ts` · [README do módulo](../../../../../modules/core/runner/effective-tool-call-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:479719-479736](../../../../../../reference/runtime/sand-eval-runner.cjs#L479719-L479736) | `FunctionDeclaration` | não | `part` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479719-479736](../../../../../../reference/runtime/sand-eval-runner.cjs#L479719-L479736) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:479719

Chamadas escritas diretamente neste corpo: `isReservedDynamicToolsNamespace`, `parseDynamicInvocationArgs`, `parseNestedNativeToolArguments`.

SHA-256 do trecho: `9d5cd2c57b00f320cea6c1ca888106de76aed1836d47dbf9f2aeadde92b5818a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
