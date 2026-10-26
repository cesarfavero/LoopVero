# `SandMcpInstructionsAndToggles.setServerCustomInstructions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-instructions-and-toggles.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-instructions-and-toggles-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688448-688464](../../../../../../../reference/runtime/host-main.cjs#L688448-L688464) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688448-688464](../../../../../../../reference/runtime/host-main.cjs#L688448-L688464) | 1 | 0 | 2 | 1 | 1 | 0 |

### host:688448

Chamadas escritas diretamente neste corpo: `.filter`, `.setMcpCustomInstructionByServerId`, `new SandMcpConfigError`, `this.deps.lastAccountDisplayConfig`, `this.deps.listServers`, `this.deps.resolveListedDisplayServer`, `this.deps.settingsStore`, `validateMcpDisplayServerId`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `cd19f09caf41f45b66eec7afc1268149c13cbc1ee32948607682ca243b6ed793`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
