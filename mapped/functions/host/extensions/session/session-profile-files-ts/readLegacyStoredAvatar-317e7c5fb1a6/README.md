# `readLegacyStoredAvatar`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-profile-files.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-profile-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722852-722859](../../../../../../../reference/runtime/host-main.cjs#L722852-L722859) | `FunctionDeclaration` | sim | `host, agentId, read2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722852-722859](../../../../../../../reference/runtime/host-main.cjs#L722852-L722859) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:722852

Chamadas escritas diretamente neste corpo: `host.agentExists`, `host.getAgentDir`, `host.withAgentDb`.

SHA-256 do trecho: `5f01d5f4ed97d661194fd3d5f85ea599ca6af206a225355e4b9fcb478f065894`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
