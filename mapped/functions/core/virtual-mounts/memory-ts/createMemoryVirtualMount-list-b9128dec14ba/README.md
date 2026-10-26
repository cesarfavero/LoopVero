# `createMemoryVirtualMount/list`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/virtual-mounts/memory.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769632-769658](../../../../../../reference/runtime/host-main.cjs#L769632-L769658) | `ArrowFunctionExpression` | sim | `_ctx, _access, path33` |
| [evaluation:565301-565327](../../../../../../reference/runtime/sand-eval-runner.cjs#L565301-L565327) | `ArrowFunctionExpression` | sim | `_ctx, _access, path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769632-769658](../../../../../../reference/runtime/host-main.cjs#L769632-L769658) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:565301-565327](../../../../../../reference/runtime/sand-eval-runner.cjs#L565301-L565327) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:769632

Chamadas escritas diretamente neste corpo: `.filter`, `candidates.map`, `collectMemoryCandidates`, `isUnder`, `refused2`, `scopes.map`, `scopes.some`, `scopesUnder`.

SHA-256 do trecho: `00aaa37bd35f6b4321991cf94e3eca83d96209b24b69275d140a078b26632b9c`.

### evaluation:565301

Chamadas escritas diretamente neste corpo: `.filter`, `candidates.map`, `collectMemoryCandidates`, `isUnder`, `refused`, `scopes.map`, `scopes.some`, `scopesUnder`.

SHA-256 do trecho: `288182952e226ae1742f75a6f5b65a4cca8b90765d94151e486dc2518cbd5c07`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
