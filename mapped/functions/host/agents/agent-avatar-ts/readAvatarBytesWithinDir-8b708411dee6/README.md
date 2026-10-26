# `readAvatarBytesWithinDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agents/agent-avatar.ts` · [README do módulo](../../../../../modules/host/agents/agent-avatar-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716823-716825](../../../../../../reference/runtime/host-main.cjs#L716823-L716825) | `FunctionDeclaration` | sim | `agentDir, candidate` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716823-716825](../../../../../../reference/runtime/host-main.cjs#L716823-L716825) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:716823

Chamadas escritas diretamente neste corpo: `readValidatedAvatar`.

SHA-256 do trecho: `6adeda817df4db34da4c0d950f54a8ca483f9fc0ad76e374ecbffafd1e880822`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
