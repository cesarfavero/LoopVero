# `buildSandRequestLineageHeaders`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/request-lineage.ts` · [README do módulo](../../../../../modules/shared/observability/request-lineage-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:216807-216821](../../../../../../reference/runtime/host-main.cjs#L216807-L216821) | `FunctionDeclaration` | não | `lineage` |
| [evaluation:511658-511672](../../../../../../reference/runtime/sand-eval-runner.cjs#L511658-L511672) | `FunctionDeclaration` | não | `lineage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:216807-216821](../../../../../../reference/runtime/host-main.cjs#L216807-L216821) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:511658-511672](../../../../../../reference/runtime/sand-eval-runner.cjs#L511658-L511672) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:216807

Chamadas escritas diretamente neste corpo: `sanitizeHeaderValue`.

SHA-256 do trecho: `1692a2f766eaad9a9b0df1fbdaf86ec74e682d401543cd1323c836dffed5eb06`.

### evaluation:511658

Chamadas escritas diretamente neste corpo: `sanitizeHeaderValue`.

SHA-256 do trecho: `1692a2f766eaad9a9b0df1fbdaf86ec74e682d401543cd1323c836dffed5eb06`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
