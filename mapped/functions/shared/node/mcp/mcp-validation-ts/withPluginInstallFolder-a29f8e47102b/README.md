# `withPluginInstallFolder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-validation.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-validation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686537-686552](../../../../../../../reference/runtime/host-main.cjs#L686537-L686552) | `FunctionDeclaration` | não | `config2, installFolder` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686537-686552](../../../../../../../reference/runtime/host-main.cjs#L686537-L686552) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:686537

Chamadas escritas diretamente neste corpo: `.map`, `Object.entries`, `Object.fromEntries`, `config2.args.map`, `expand2`.

SHA-256 do trecho: `620968213825598d20d0662fa42bb6920b30194a71d4e99a0bc71acfe2f5aa07`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
