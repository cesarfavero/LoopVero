# `normalizeSubagentIdArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-subagent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780875-780899](../../../../../../../reference/runtime/host-main.cjs#L780875-L780899) | `FunctionDeclaration` | não | `value, ctx` |
| [evaluation:581222-581246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581222-L581246) | `FunctionDeclaration` | não | `value, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780875-780899](../../../../../../../reference/runtime/host-main.cjs#L780875-L780899) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:581222-581246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581222-L581246) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:780875

Chamadas escritas diretamente neste corpo: `.filter`, `Object.entries`, `Object.fromEntries`, `SUBAGENT_ID_ALIASES.filter`, `aliases.join`, `aliases.map`, `ctx.addIssue`, `isUnknownRecord2`, `new Set`, `reportShim`, `subagentIdAlias.applied`, `subagentIdAlias.refused`.

SHA-256 do trecho: `ffcc38335e79b6e9cf7081171d4747faa501e44089c5c36a4a7190c2c6390c3d`.

### evaluation:581222

Chamadas escritas diretamente neste corpo: `.filter`, `Object.entries`, `Object.fromEntries`, `SUBAGENT_ID_ALIASES.filter`, `aliases.join`, `aliases.map`, `ctx.addIssue`, `isUnknownRecord2`, `new Set`, `reportShim`, `subagentIdAlias.applied`, `subagentIdAlias.refused`.

SHA-256 do trecho: `b7b03a5496a233b5e5a7943b6c1a2d00fb8d19c90173a7a74e450dd6af8cc261`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
