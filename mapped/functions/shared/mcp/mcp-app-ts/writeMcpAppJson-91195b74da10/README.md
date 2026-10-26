# `writeMcpAppJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-app.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-app-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:486857-486865](../../../../../../reference/runtime/host-main.cjs#L486857-L486865) | `FunctionDeclaration` | não | `value` |
| [evaluation:495178-495186](../../../../../../reference/runtime/sand-eval-runner.cjs#L495178-L495186) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486857-486865](../../../../../../reference/runtime/host-main.cjs#L486857-L486865) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:495178-495186](../../../../../../reference/runtime/sand-eval-runner.cjs#L495178-L495186) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:486857

Chamadas escritas diretamente neste corpo: `JSON.stringify`.

SHA-256 do trecho: `ba2df039239e6d81b427f4635ed046a12d63fff99de79f9d785f3f90a619da24`.

### evaluation:495178

Chamadas escritas diretamente neste corpo: `JSON.stringify`.

SHA-256 do trecho: `ba2df039239e6d81b427f4635ed046a12d63fff99de79f9d785f3f90a619da24`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
