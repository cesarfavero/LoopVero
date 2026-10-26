# `allowedAppResourceUri`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/mcp-app/mcp-app-emitter.ts` · [README do módulo](../../../../../../modules/core/runner/mcp-app/mcp-app-emitter-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585406-585410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585406-L585410) | `FunctionDeclaration` | não | `tool, isAppServer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585406-585410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585406-L585410) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585406

Chamadas escritas diretamente neste corpo: `isAppServer`, `resolveMcpAppResourceUri`.

SHA-256 do trecho: `fc56a27a22e9c8cfacc260594b878419f10a29e77529e8527777d278b5cf01b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
