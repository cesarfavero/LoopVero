# `parseGateOverrides`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/gate-overrides.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/gate-overrides-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451431-451440](../../../../../../../reference/runtime/host-main.cjs#L451431-L451440) | `FunctionDeclaration` | não | `raw` |
| [evaluation:597038-597047](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597038-L597047) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451431-451440](../../../../../../../reference/runtime/host-main.cjs#L451431-L451440) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:597038-597047](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597038-L597047) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:451431

Chamadas escritas diretamente neste corpo: `.map`, `Object.hasOwn`, `pair.split`, `raw.split`.

Alvos de atribuição ou incremento: `overrides[computed]`.

SHA-256 do trecho: `3f1a8c2fbb165410a00bf2b61bb5556ff43faf1a839b8263d0d720dcc033615c`.

### evaluation:597038

Chamadas escritas diretamente neste corpo: `.map`, `Object.hasOwn`, `pair.split`, `raw.split`.

Alvos de atribuição ou incremento: `overrides[computed]`.

SHA-256 do trecho: `3f1a8c2fbb165410a00bf2b61bb5556ff43faf1a839b8263d0d720dcc033615c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
