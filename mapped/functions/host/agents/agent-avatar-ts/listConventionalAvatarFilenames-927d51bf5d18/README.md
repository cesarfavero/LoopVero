# `listConventionalAvatarFilenames`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agents/agent-avatar.ts` · [README do módulo](../../../../../modules/host/agents/agent-avatar-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716744-716753](../../../../../../reference/runtime/host-main.cjs#L716744-L716753) | `FunctionDeclaration` | não | `agentDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716744-716753](../../../../../../reference/runtime/host-main.cjs#L716744-L716753) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:716744

Chamadas escritas diretamente neste corpo: `reportFallbackUnlessAbsent`, `sortConventionalAvatarFilenames`.

Alvos de atribuição ou incremento: `entries`.

SHA-256 do trecho: `ccdd4a3de9c51b04c4fceb4d03263d81afe943be5e55eb81a79db2a606b1fb2d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
