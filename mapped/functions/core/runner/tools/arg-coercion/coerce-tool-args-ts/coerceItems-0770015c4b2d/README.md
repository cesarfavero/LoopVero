# `coerceItems`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724891-724897](../../../../../../../../reference/runtime/host-main.cjs#L724891-L724897) | `FunctionDeclaration` | não | `value, schemaAt` |
| [evaluation:479854-479860](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479854-L479860) | `FunctionDeclaration` | não | `value, schemaAt` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724891-724897](../../../../../../../../reference/runtime/host-main.cjs#L724891-L724897) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479854-479860](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479854-L479860) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:724891

Chamadas escritas diretamente neste corpo: `next.some`, `value.map`.

SHA-256 do trecho: `a98f5c6a640fc4ab1cc5034d2e73171f68da203549b8d5ffd18ba9555a024f97`.

### evaluation:479854

Chamadas escritas diretamente neste corpo: `next.some`, `value.map`.

SHA-256 do trecho: `a98f5c6a640fc4ab1cc5034d2e73171f68da203549b8d5ffd18ba9555a024f97`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
