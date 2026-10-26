# `untilSettledOrAborted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-media-root-observability.ts` · [README do módulo](../../../../modules/host/agent-media-root-observability-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723785-723798](../../../../../reference/runtime/host-main.cjs#L723785-L723798) | `FunctionDeclaration` | sim | `work, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723785-723798](../../../../../reference/runtime/host-main.cjs#L723785-L723798) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:723785

Chamadas escritas diretamente neste corpo: `Promise.race`, `abort`, `new Promise`, `signal.addEventListener`, `signal.removeEventListener`.

SHA-256 do trecho: `4b6c00ae7cf46c9081f37b9ea6de1a2f14912f34601ab5e9f8bd78b315786d3f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
