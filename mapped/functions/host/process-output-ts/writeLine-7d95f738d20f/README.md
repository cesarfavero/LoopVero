# `writeLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/process-output.ts` · [README do módulo](../../../../modules/host/process-output-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:455766-455769](../../../../../reference/runtime/host-main.cjs#L455766-L455769) | `FunctionExpression` | não | `stream3, line` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455766-455769](../../../../../reference/runtime/host-main.cjs#L455766-L455769) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:455766

Chamadas escritas diretamente neste corpo: `process[computed].write`.

SHA-256 do trecho: `ccf7f902fa613e3cb2cd9a6cfd105926e470bf8d73fad15039f865fabbd78b10`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
