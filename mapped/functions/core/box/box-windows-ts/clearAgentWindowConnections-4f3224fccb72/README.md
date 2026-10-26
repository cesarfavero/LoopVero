# `clearAgentWindowConnections`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-windows.ts` · [README do módulo](../../../../../modules/core/box/box-windows-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554199-554206](../../../../../../reference/runtime/host-main.cjs#L554199-L554206) | `FunctionDeclaration` | não | `connections, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554199-554206](../../../../../../reference/runtime/host-main.cjs#L554199-L554206) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:554199

Chamadas escritas diretamente neste corpo: `connections.delete`, `connections.keys`, `key.startsWith`.

SHA-256 do trecho: `792eae0925edac2590c22838754f4a3ba9a24a0055569389b3bfdb74be48d1bb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
