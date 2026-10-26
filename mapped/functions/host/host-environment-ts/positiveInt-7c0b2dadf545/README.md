# `positiveInt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-environment.ts` · [README do módulo](../../../../modules/host/host-environment-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494087-494091](../../../../../reference/runtime/host-main.cjs#L494087-L494091) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494087-494091](../../../../../reference/runtime/host-main.cjs#L494087-L494091) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:494087

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `Number.parseInt`, `raw.trim`.

SHA-256 do trecho: `ff946fcc67c67f30ec37b88973f383e59a95b3593e357d95916dc74168560e09`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
