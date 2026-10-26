# `SandHost.subscribe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-host.ts` · [README do módulo](../../../../modules/host/sand-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786573-786596](../../../../../reference/runtime/host-main.cjs#L786573-L786596) | `method` | não | `listener, surface = SAND_CLIENT_SURFACE_DESKTOP` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786573-786596](../../../../../reference/runtime/host-main.cjs#L786573-L786596) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:786573

Chamadas escritas diretamente neste corpo: `.api`, `.openRequest`, `listener`, `this.listeners.set`, `this.noteEventStreamListeners`, `this.requireHostExtensions`.

SHA-256 do trecho: `bd587ba69ec6634bbd0c040053904dd33ff6f654695b73a08641c67b70f5e178`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
