# `sandDataRelativeTail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/host-paths.ts` · [README do módulo](../../../../modules/core/host-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430916-430923](../../../../../reference/runtime/host-main.cjs#L430916-L430923) | `FunctionDeclaration` | não | `storedPath, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430916-430923](../../../../../reference/runtime/host-main.cjs#L430916-L430923) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:430916

Chamadas escritas diretamente neste corpo: `/(?:[/\\]\.cursor[/\\]sand(?:-[^/\\]+)?|[/\\]\.grokbot)[/\\](.+)$/.exec`, `isPathWithin`.

SHA-256 do trecho: `1a5b4ab235fd8c36eb02dfcb75dae222c6415eaa47cd75bd416411153bbe2c79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
