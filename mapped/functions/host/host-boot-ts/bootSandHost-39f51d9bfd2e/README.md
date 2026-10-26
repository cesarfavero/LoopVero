# `bootSandHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-boot.ts` · [README do módulo](../../../../modules/host/host-boot-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493977-493980](../../../../../reference/runtime/host-main.cjs#L493977-L493980) | `FunctionDeclaration` | sim | `runHostMain2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493977-493980](../../../../../reference/runtime/host-main.cjs#L493977-L493980) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:493977

Chamadas escritas diretamente neste corpo: `activateHostLocale`, `runHostMain2`.

SHA-256 do trecho: `4ed595757ad39810600d3718c7be3be475b9089c3026fda403fa1a868995f15a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
