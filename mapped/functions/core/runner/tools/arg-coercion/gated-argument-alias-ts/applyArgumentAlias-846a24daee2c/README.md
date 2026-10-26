# `applyArgumentAlias`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/arg-coercion/gated-argument-alias.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/gated-argument-alias-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777578-777591](../../../../../../../../reference/runtime/host-main.cjs#L777578-L777591) | `FunctionDeclaration` | não | `value, spec, enabled, ctx` |
| [evaluation:577273-577286](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577273-L577286) | `FunctionDeclaration` | não | `value, spec, enabled, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777578-777591](../../../../../../../../reference/runtime/host-main.cjs#L777578-L777591) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:577273-577286](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577273-L577286) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:777578

Chamadas escritas diretamente neste corpo: `Object.entries`, `aliases.join`, `aliases.map`, `enabled`, `isUnknownRecord2`, `new Set`, `refuseConflictingAliases`, `reportShim`, `spec.aliases.filter`, `spec.shim.applied`, `withFieldFromAliases`.

SHA-256 do trecho: `de54cb6d2fc7b08777e5f62b5e7e13c565a79e3bb164107e02d94f5a104d0faa`.

### evaluation:577273

Chamadas escritas diretamente neste corpo: `Object.entries`, `aliases.join`, `aliases.map`, `enabled`, `isUnknownRecord2`, `new Set`, `refuseConflictingAliases`, `reportShim`, `spec.aliases.filter`, `spec.shim.applied`, `withFieldFromAliases`.

SHA-256 do trecho: `de54cb6d2fc7b08777e5f62b5e7e13c565a79e3bb164107e02d94f5a104d0faa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
