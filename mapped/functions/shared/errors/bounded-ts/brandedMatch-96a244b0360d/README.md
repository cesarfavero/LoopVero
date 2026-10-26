# `brandedMatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/errors/bounded.ts` · [README do módulo](../../../../../modules/shared/errors/bounded-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:155164-155166](../../../../../../reference/runtime/host-main.cjs#L155164-L155166) | `FunctionDeclaration` | não | `pattern, value` |
| [evaluation:475829-475831](../../../../../../reference/runtime/sand-eval-runner.cjs#L475829-L475831) | `FunctionDeclaration` | não | `pattern, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:155164-155166](../../../../../../reference/runtime/host-main.cjs#L155164-L155166) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475829-475831](../../../../../../reference/runtime/sand-eval-runner.cjs#L475829-L475831) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:155164

Chamadas escritas diretamente neste corpo: `pattern.test`.

SHA-256 do trecho: `1037dcf5bab62de6f5e78db3517eabec36cc13c9ebd46af84461092a7425c670`.

### evaluation:475829

Chamadas escritas diretamente neste corpo: `pattern.test`.

SHA-256 do trecho: `1037dcf5bab62de6f5e78db3517eabec36cc13c9ebd46af84461092a7425c670`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
