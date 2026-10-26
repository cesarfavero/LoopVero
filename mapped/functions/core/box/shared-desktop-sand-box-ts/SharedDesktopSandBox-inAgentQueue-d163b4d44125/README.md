# `SharedDesktopSandBox.inAgentQueue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554923-554936](../../../../../../reference/runtime/host-main.cjs#L554923-L554936) | `method` | sim | `ctx, agentId, work` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554923-554936](../../../../../../reference/runtime/host-main.cjs#L554923-L554936) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:554923

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `Promise.withResolvers`, `earlier.then`, `this.agentEnsures.get`, `this.agentEnsures.set`, `turn.promise.then`, `untilCanceled`, `work`.

SHA-256 do trecho: `1662918fca8a82163d51cfe117416b8664348533de0f568ab8b3079d08b0dfe3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
