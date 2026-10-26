# `retryFillOnce`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727895-727914](../../../../../../../reference/runtime/host-main.cjs#L727895-L727914) | `FunctionDeclaration` | sim | `ctx, runner, entry, target, op, belt, firstPassKind, disambiguation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727895-727914](../../../../../../../reference/runtime/host-main.cjs#L727895-L727914) | 6 | 0 | 3 | 5 | 0 | 0 |

### host:727895

Chamadas escritas diretamente neste corpo: `belt.okToWrite`, `belt.trustResult`, `op.args`, `resolveRefFromFreshSnapshot`, `runner.run`.

SHA-256 do trecho: `f78965c7f4af6040e29a4f639b9ca8fc0bab270f510cf12ef37e64580cba00bc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
