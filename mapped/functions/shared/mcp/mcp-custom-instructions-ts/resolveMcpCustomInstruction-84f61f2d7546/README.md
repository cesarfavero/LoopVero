# `resolveMcpCustomInstruction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-custom-instructions.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-custom-instructions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687258-687263](../../../../../../reference/runtime/host-main.cjs#L687258-L687263) | `FunctionDeclaration` | não | `serverName, storedInstruction` |
| [evaluation:529144-529149](../../../../../../reference/runtime/sand-eval-runner.cjs#L529144-L529149) | `FunctionDeclaration` | não | `serverName, storedInstruction` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687258-687263](../../../../../../reference/runtime/host-main.cjs#L687258-L687263) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:529144-529149](../../../../../../reference/runtime/sand-eval-runner.cjs#L529144-L529149) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:687258

Chamadas escritas diretamente neste corpo: `getDefaultMcpCustomInstruction`, `storedInstruction.trim`.

SHA-256 do trecho: `4a11ba743a31c54546b4160ce09a676e97a264d22c4f25a3323fdd55ec9f8576`.

### evaluation:529144

Chamadas escritas diretamente neste corpo: `getDefaultMcpCustomInstruction`, `storedInstruction.trim`.

SHA-256 do trecho: `4a11ba743a31c54546b4160ce09a676e97a264d22c4f25a3323fdd55ec9f8576`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
