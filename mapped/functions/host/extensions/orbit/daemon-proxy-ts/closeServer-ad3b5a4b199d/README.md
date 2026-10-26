# `closeServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705533-705552](../../../../../../../reference/runtime/host-main.cjs#L705533-L705552) | `FunctionDeclaration` | sim | `server` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705533-705552](../../../../../../../reference/runtime/host-main.cjs#L705533-L705552) | 2 | 0 | 1 | 1 | 1 | 1 |

### host:705533

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `new Promise`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `16c4345ccafdd7aa07d45c57d85debd5fa1b6116fb45a0b709db56d5026f2d30`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
