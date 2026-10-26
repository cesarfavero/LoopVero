# `normalizeMcpCustomInstructions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-custom-instructions.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-custom-instructions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687268-687279](../../../../../../reference/runtime/host-main.cjs#L687268-L687279) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687268-687279](../../../../../../reference/runtime/host-main.cjs#L687268-L687279) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:687268

Chamadas escritas diretamente neste corpo: `Object.entries`, `clampMcpCustomInstruction`, `clamped.trim`, `getDefaultMcpCustomInstruction`.

Alvos de atribuição ou incremento: `normalized[computed]`.

SHA-256 do trecho: `c4e40cb73b9017ff9041f8dc23ece206b2f1c702b1f4228235d3def53754d76a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
