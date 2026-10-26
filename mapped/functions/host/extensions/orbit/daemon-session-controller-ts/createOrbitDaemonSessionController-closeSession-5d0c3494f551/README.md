# `createOrbitDaemonSessionController/closeSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705957-705967](../../../../../../../reference/runtime/host-main.cjs#L705957-L705967) | `FunctionDeclaration` | sim | `openSession2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705957-705967](../../../../../../../reference/runtime/host-main.cjs#L705957-L705967) | 1 | 0 | 1 | 0 | 0 | 1 |

### host:705957

Chamadas escritas diretamente neste corpo: `openSession2.session.close`, `reportFailure`, `withdrawOperations`.

Alvos de atribuição ou incremento: `state.currentSession`.

SHA-256 do trecho: `886140f30271a9695948203862827037074fc6d5b5f3e16ab3254f221a26e3f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
