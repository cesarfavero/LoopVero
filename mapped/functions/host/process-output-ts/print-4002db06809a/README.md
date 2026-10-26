# `print`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/process-output.ts` · [README do módulo](../../../../modules/host/process-output-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:455763-455765](../../../../../reference/runtime/host-main.cjs#L455763-L455765) | `FunctionExpression` | não | `level, ...args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455763-455765](../../../../../reference/runtime/host-main.cjs#L455763-L455765) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:455763

Chamadas escritas diretamente neste corpo: `console[computed]`.

SHA-256 do trecho: `412d1dca31356a15fa60e6e1d61366cba1fbf2cb61a3e2e1dd2f68cc963d44d2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
