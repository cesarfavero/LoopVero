# `normalizeSendToAgentArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-agent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:757285-757321](../../../../../../../reference/runtime/host-main.cjs#L757285-L757321) | `FunctionDeclaration` | não | `value, ctx` |
| [evaluation:543308-543344](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543308-L543344) | `FunctionDeclaration` | não | `value, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757285-757321](../../../../../../../reference/runtime/host-main.cjs#L757285-L757321) | 7 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:543308-543344](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543308-L543344) | 7 | 0 | 0 | 2 | 0 | 0 |

### host:757285

Chamadas escritas diretamente neste corpo: `.filter`, `Object.entries`, `Object.fromEntries`, `SEND_TO_AGENT_FAN_OUT_KEYS.find`, `aliasesUsed.join`, `ctx.addIssue`, `isUnknownRecord2`, `pick2`, `preprocessLenientBoolean`, `reportShim`, `sendToAgentArgAlias.applied`.

SHA-256 do trecho: `c432d46496234f32c9de6296d624f5bd0d9f11a332195fecf01985193f735c68`.

### evaluation:543308

Chamadas escritas diretamente neste corpo: `.filter`, `Object.entries`, `Object.fromEntries`, `SEND_TO_AGENT_FAN_OUT_KEYS.find`, `aliasesUsed.join`, `ctx.addIssue`, `isUnknownRecord2`, `pick2`, `preprocessLenientBoolean`, `reportShim`, `sendToAgentArgAlias.applied`.

SHA-256 do trecho: `27567c8a338d52c707e730cbaa42ee0481e172cbed81123f477d751cc6f7938c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
