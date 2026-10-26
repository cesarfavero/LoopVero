# `refuseConflictingAliases`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/arg-coercion/gated-argument-alias.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/gated-argument-alias-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777567-777570](../../../../../../../../reference/runtime/host-main.cjs#L777567-L777570) | `FunctionDeclaration` | não | `spec, log5, ctx` |
| [evaluation:577262-577265](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577262-L577265) | `FunctionDeclaration` | não | `spec, log5, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777567-777570](../../../../../../../../reference/runtime/host-main.cjs#L777567-L777570) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:577262-577265](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577262-L577265) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:777567

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `reportShim`, `spec.shim.refused`.

SHA-256 do trecho: `b00e5433c4d65a7bbe9615b1d9aedce7a8a1273531f9e276e64a9e093d3ea9a8`.

### evaluation:577262

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `reportShim`, `spec.shim.refused`.

SHA-256 do trecho: `35b765aeed42b95f1a5c93edc811175fe2be6aa3578980e4dd9a7b39865acbd1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
