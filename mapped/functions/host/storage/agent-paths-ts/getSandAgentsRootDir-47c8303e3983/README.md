# `getSandAgentsRootDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/agent-paths.ts` · [README do módulo](../../../../../modules/host/storage/agent-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494893-494895](../../../../../../reference/runtime/host-main.cjs#L494893-L494895) | `FunctionDeclaration` | não | `homeDir = (0, import_node_os9.homedir)()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494893-494895](../../../../../../reference/runtime/host-main.cjs#L494893-L494895) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494893

Chamadas escritas diretamente neste corpo: `getSandRootDir`.

SHA-256 do trecho: `83a9c068e06408dbca40adad8d7191003cd98ee9ab0e48324b91cd97f94514c9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
