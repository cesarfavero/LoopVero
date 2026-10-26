# `isRunSpacer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/secure-value-guard.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767626-767628](../../../../../../../../reference/runtime/host-main.cjs#L767626-L767628) | `FunctionDeclaration` | não | `item` |
| [evaluation:563143-563145](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563143-L563145) | `FunctionDeclaration` | não | `item` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767626-767628](../../../../../../../../reference/runtime/host-main.cjs#L767626-L767628) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563143-563145](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563143-L563145) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:767626

Chamadas escritas diretamente neste corpo: `SPACER_ROLES.has`, `SPACER_VALUE.test`.

SHA-256 do trecho: `a942017d20da8234c0463709b6d2f2d4ebbb3937506376251af10fa7d5013fd1`.

### evaluation:563143

Chamadas escritas diretamente neste corpo: `SPACER_ROLES.has`, `SPACER_VALUE.test`.

SHA-256 do trecho: `a942017d20da8234c0463709b6d2f2d4ebbb3937506376251af10fa7d5013fd1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
